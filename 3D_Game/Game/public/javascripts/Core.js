define([ 'Sockets' ], function(Sockets) {
	'use strict';
	var elf = {};
	var blockSize = 8;
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

	var drawPointer = function(x, y, rotation, context) {
            var lineHeight = 3;
            
            context.save();
            context.translate(x, y);

            context.rotate(-(rotation + Math.PI / 2));

            if (false) {
                context.drawImage(utility.arrows['east'], -4, -4);
            } else {             
               context.strokeStyle = "#000000";
               context.textAlign = 'center';
               context.strokeText('>', 0, lineHeight);
            }

            context.restore();
        };
	var prevRect = {};
	function updatePos(pos, rotation) {
		var c = document.getElementById("myCanvas");
		var context = c.getContext("2d");

		if (prevRect.x !== undefined) {
			context.clearRect(prevRect.x, prevRect.y, blockSize, blockSize);
		}

		context.fillStyle = "#FFFF00";

		prevRect.x = pos.curX * blockSize;
		prevRect.y = pos.curY * blockSize;

		context.fillRect(prevRect.x, prevRect.y, blockSize, blockSize);

		var fog = document.getElementById('fogCanvas');
	    var context2 = fog.getContext('2d');
	    context2.clearRect(prevRect.x - 2 * blockSize, prevRect.y - 2 * blockSize, blockSize * 4, blockSize * 4);  /* 
	        * todo: make it clear circle instead of square
	        *  var radius = 3*core.BlockSize;
	        * context2.beginPath();
	        context2.arc(prevRect.x, prevRect.y, radius, 0, 2 * Math.PI, false);
	        context2.clip();
	        context2.clearRect(prevRect.x - radius - 1, prevRect.y - radius - 1,
	                          radius * 2 + 2, radius * 2 + 2);
	        context2.closePath();*/
	        
		
		// context.drawImage(utility.arrows[direction], xpos, ypos);
		drawPointer(prevRect.x + 4, prevRect.y + 4, rotation, context);	        
	
	}	
	
	elf.Core = function() {
		var _instance = null;
		var scene = null;
		var camera = null;
		var renderer = null;
		var socket = null;
		var mazeMap = null;
		var internalInit = function() {
			// initialize scene
			scene = new THREE.Scene();
			scene.fog = new THREE.Fog(16777215, 0, 750);
			mazeMap = null;
		};
		function updateChatMessage(msg) {
			$('#gameData').html(msg);
			window.setTimeout(function() {
				$('#gameData').html('');
			}, 3000);
		}
		function Core() {
			if (_instance === null) {
				_instance = this;
			} else {
				return _instance;
			}
			var io = new Sockets();
			var url = window.location.href;
			socket = io.connect(url);
			Object.defineProperty(_instance, 'BlockSize', {
				get : function() {
					return blockSize;
				},
				enumerable : true,
				configurable : true
			});
			// initialize renderer
			renderer = new THREE.WebGLRenderer({
				antialias : true
			});
			renderer.setClearColor(14085119);
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);
			// initialize camera
			var screenWidth = window.innerWidth / window.innerHeight;
			camera = new THREE.PerspectiveCamera(75, screenWidth, 1, 1000);
			internalInit();
			// init chat
			socket.on('chatUpdate', function(msg) {
				updateChatMessage(msg);
			});

			socket.on('mapEmit', function(data) {
				var c = document.getElementById("myCanvas");
				var ctx = c.getContext("2d");
				ctx.clearRect(0, 0, c.width, c.height);
				var blockSize = 8;
				iterate(data.mazeMap, function(x, z, npcType) {

					if (npcType === 1) {// walls
						ctx.fillStyle = "#5C85FF";
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					} else if (npcType.npctype === "npc") {// npcs
						ctx.fillStyle = npcType.color;
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);
					} else if (npcType === 100) {// hero. todo
						ctx.fillStyle = "#FFFF00";
						ctx.fillRect(x * blockSize, z * blockSize, blockSize,
								blockSize);						
					}

				});
				updatePos(data.tinyPos, data.rotation);
			});
		}
		
		Core.prototype.updateChatMessage = function(msg) {
			updateChatMessage(msg);
		};
		Core.prototype.init = function() {
			// initialize scene
			internalInit();
		};
		Core.prototype.publicMethod = function() {
			return 'I\'m the Core.publicMethod.';
		};
		Core.prototype.getScene = function() {
			return scene;
		};
		Core.prototype.getCamera = function() {
			return camera;
		};
		Core.prototype.getRenderer = function() {
			return renderer;
		};
		Core.prototype.getSocket = function() {
			return socket;
		};
		Core.prototype.initMazeMap = function(height, width) {
			if (mazeMap !== null)
				return;
			mazeMap = [];
			for (var i = 0; i < height; i++) {
				mazeMap.push(Array.apply(null, new Array(width)).map(
						Number.prototype.valueOf, 0));
			}
		};
		Core.prototype.getMazeMap = function() {
			return mazeMap;
		};
		return Core;
	}();
	return elf.Core;
});
