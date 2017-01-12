define([
  'Floors',
  'PointerLockControls',
  'PointerLockSetup',
  'Shapes',
  'Particles',
  'Core',
  'TinyPubSub',
  'Sockets',
  'Buildings',
  'Score'
], function (Floors, PointerLockControls, PointerLockSetup, Shapes, Particles, Core, TinyPubSub, Sockets, Buildings, Score) {
  'use strict';
  var core = null;
  var size = 40;
  var cameraZ = 90;
  var cameraX = 40;
  var controls = null;
  var level = 1;
  var particles = new Particles();
  var buildings = new Buildings();
  var exitPos = {
    x: 0,
    y: 1
  };
  var score;
  var exitOpened = false;
  var question = {q:"", a:null};
  
  document.addEventListener('keydown', onkeydown, false);
    $(document).keydown(onkeydown, function(){
		var thisKey = window.event.keyCode;
		if(thisKey==13){
			$("#message").toggle();		
		} else if (thisKey == 84 && question.a === true) {
			//remove npc
			removeNpc();
		} else if (thisKey == 70 && question.a === false) {
			//remove npc
			removeNpc();
		} else if (thisKey !== 38) {
			//remove question from screen
			$('#question').html('');
			question = {};
		}
		
		});
  function resetLevel() {
    $('#npcLeft').html('2');
    //todo: rewrite this hardcoded line.
    core.init();
    particles = new Particles();
    buildings = new Buildings();
    cameraZ = 90;
    cameraX = 40;
    exitOpened = false;
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    makeFog();
    ctx.clearRect(0, 0, c.width, c.height);
  }
  function makeFog() {
    var fog = document.getElementById('fogCanvas');
    var ctx = fog.getContext('2d');
    ctx.fillStyle = '#B2B2CC';
    ctx.fillRect(0, 0, fog.width, fog.height);
  }
  function Control() {
    core = new Core();
    makeFog();
    init();
    animate();
    $.subscribe('redrawTinyMap', drawTinyMap);
  }
  var prevRect = {};
  function drawTinyMap(event, message) {
  }
  
  function doPointerLock() {
    var camera = core.getCamera();
    controls = new THREE.PointerLockControls(camera);
    var yawObject = controls.getObject();
    var scene = core.getScene();
    scene.add(yawObject);
    // Move camera to the 1, 1 position
    yawObject.position.x = size + cameraX;
    yawObject.position.z = size + cameraZ;
    var ps = new PointerLockSetup(controls);
  }
  
  function init() {
    doPointerLock();
    buildings.addLights();
    var floors = new Floors();
    floors.drawFloor();
    score = new Score();
    window.addEventListener('resize', onWindowResize, false);
    /*$('#gameData').load('GameData.html');
            $.getJSON('GameData.json', function(json) {
                $('#gameJson').html(json[0].Name);
            });*/
    var fileName = level === 1 ? 'Grid000.json' : 'Grid001.json';
    $.getJSON(fileName, function (json) {
      core.initMazeMap(json.length, json[0].length);
      particles.initNpc(level);//only after map is initialized
      for (var i = 0; i < json.length; i++) {
        for (var j = 0; j < json[0].length; j++) {
          if (json[i][j] === 1) {
            core.getMazeMap()[i][j] = 1;
            console.log(core.getMazeMap()[i][j]);
          }
        }
      }
      //core.getSocket().emit('mazeMapReady', core.getMazeMap());
      buildings.addCubes(false, exitPos);
    });
  }
  
  function removeNpc() {
	 
	var x = question.x;
	var y = question.y;
	
    score.addMainCharacterValue(core.getMazeMap()[x][y].value);
    
    var remainingNpc = particles.setNpc(x, y, 0);
	core.updateChatMessage('NPC found.');  //display how many npcs left
                                             //$('#npcLeft').html(' ' +  + ' ');
    if (!exitOpened && remainingNpc === 0) {
      core.updateChatMessage('Exit opened, get to it ASAP!');
      exitOpened = true;
      //open door
      //todo: show message to the player.
      var c = document.getElementById('myCanvas');
      var context = c.getContext('2d');
      context.clearRect(exitPos.x * core.BlockSize, exitPos.y * core.BlockSize, core.BlockSize, core.BlockSize);
      core.getMazeMap()[exitPos.x][exitPos.y] = 0;
      buildings.openExit();
    }
    $('#question').html('');
  }
  
  function handleNpcCollision(npc) {
	var gridX = Math.round(npc.position.x / size);
    var gridY = Math.round(npc.position.z / size);
    if (core.getMazeMap()[gridX][gridY].npctype !== "npc")
		return true; //don't want collision. should never be here, just for protection.
		
    console.log(core.getMazeMap()[gridX][gridY].value);
	if (score.mainCharacterValue() < core.getMazeMap()[gridX][gridY].value)
		return false; //bounce

	//show question
	question.q = core.getMazeMap()[gridX][gridY].q;
    question.a = core.getMazeMap()[gridX][gridY].a;
    question.x = gridX;
    question.y = gridY;
    $('#question').html(question.q);
    
	return false;//bounce until question is answered
  }
  
  function animate() {
    requestAnimationFrame(animate);
    var xAxis = new THREE.Vector3(1, 0, 0);
    particles.rotateParticlesAroundWorldAxis(0, xAxis, Math.PI / 100, true);
    controls.isOnObject(false);
    var controlObject = controls.getObject();
    var position = controlObject.position;
    $('#cameraX').html(' ' + Math.round(position.x) + ' ');
    $('#cameraY').html(' ' + Math.round(position.y) + ' ');
    $('#cameraZ').html(' ' + Math.round(position.z) + ' ');
    // drawText(controlObject, position);
    buildings.collisionDetection(position, controls, particles.npcs(), handleNpcCollision);
    var gridX = Math.round(position.x / size);
    var gridY = Math.round(position.z / size);
    //display how many npcs left
    //$('#npcLeft').html(' ' +  + ' ');
    if (exitOpened && gridX == exitPos.x && gridY == exitPos.y) {
      core.updateChatMessage('Level completed!');
      document.exitPointerLock();
      resetLevel();
      level++;
      var levCaption = $('#level')[0];
      levCaption.innerText = 'Level ' + level + '  ';
      init();
      return;
    }
    var listenerData = {};
    listenerData.positionX = position.x;
    listenerData.positionY = position.y;
    listenerData.positionZ = position.z;
    listenerData.mazeMap = core.getMazeMap();
    listenerData.tinyPos = {
      curX: gridX,
      curY: gridY
    };
    listenerData.rotation = controlObject.rotation.y;
    //sending message to the server through the socket.io
    //core.getSocket().emit('controlEmits', listenerData);
    core.getSocket().emit('mazeMapReady', listenerData);
    $.publish('redrawTinyMap', {
      message: 'Publishing redrawTinyMap.',
      curX: gridX,
      curY: gridY
    });
    // Move the camera
    controls.update();
    var scene = core.getScene();
    var camera = core.getCamera();
    core.getRenderer().render(scene, camera);
  }
  function onWindowResize() {
    var camera = core.getCamera();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    core.getRenderer().setSize(window.innerWidth, window.innerHeight);
  }
  return Control;
});
