$(document).ready(
		function() {
			// var url = window.location.href
			// var socket = io.connect(url);
			'use strict';
			var host = window.location.hostname;
			var serverPort = window.location.port - 1;
			// e.g. Listener loaded from port 30026, then it assumes that game
			// server is on 30025
			var socket = io.connect('http://' + host + ":" + serverPort);
			var blockSize = 8;

			var sendMessage = function() {
				socket.emit('chatMessage', $('#myInput').val());
				alert("control is on");
			};

			$("#chatButton")[0].onclick = function() {
				socket.emit('chatMessage', $('#myInput').val());
			};

			socket.on('socket_is_connected', function(message) {
				$('#debug').html(message);

			});

			var prevRect = {};

			function updatePos(pos) {
				var c = document.getElementById("myCanvas");
				var context = c.getContext("2d");

				if (prevRect.x !== undefined) {
					context.clearRect(prevRect.x, prevRect.y, blockSize,
							blockSize);
				}

				context.fillStyle = "#FFFF00";

				prevRect.x = pos.curX * blockSize;
				prevRect.y = pos.curY * blockSize;

				context.fillRect(prevRect.x, prevRect.y, blockSize, blockSize);
			}

			socket.on('socketCoreEmits', function(listenerData) {

			});

			var iterate = function(gridData, callback) {
				if (gridData) {
					for (var z = 0; z < gridData.length; z++) {
						for (var x = 0; x < gridData[0].length; x++) {
							var npcValue = gridData[z][x];
							callback(z, x, npcValue);
						}
					}
				}
			};

			socket.on('mapEmit', function(data) {
				var c = document.getElementById("myCanvas");
				var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, c.width, c.height);
				var blockSize = 8;
				iterate(data.mazeMap, function(x, z, npcType) {

					if (npcType === 1) {//walls
						ctx.fillStyle = "#5C85FF";
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					} else if (npcType.npctype == "npc") {// npcs
						ctx.fillStyle = npcType.color;
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					} else if (npcType === 100) {//hero
						ctx.fillStyle = "#FFFF00";
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					}
					/*
					 * else { ctx.fillStyle = "#00FF00"; }
					 */

				});
				$('#debug').html("works");
				$("#positionX").html("x:" + data.positionX);
				$("#positionY").html("y:" + data.positionY);
				$("#positionZ").html("z:" + data.positionZ);
				updatePos(data.tinyPos);

			});

			socket.on('npcEmit', function(data) {
				console.log(data.grid);
				var c = document.getElementById("myCanvas");
				var ctx = c.getContext("2d");
				iterate(data, function(x, z, npcType) {

					if (npcType !== 0) {
						ctx.fillStyle = "#5C00FF";
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					}
				});
			});
		});

// Client
