define([
  'Floors',
  'PointerLockControls',
  'PointerLockSetup',
  'Shapes',
  'Particles',
  'Core',
  'TinyPubSub',
  'Sockets'
], function (Floors, PointerLockControls, PointerLockSetup, Shapes, Particles, Core, TinyPubSub, Sockets) {
  'use strict';
  var core = null;
  var size = 40;
  var raycaster = null;
  var cubes = [];
  var exitCubeIndexInCubes = -1;
  function Buildings() {
    core = new Core();
    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, -1, 0), 0, 10);
    cubes = [];
    exitCubeIndexInCubes = -1;
  }
  //Buildings.prototype. 
  Buildings.prototype.addCubes = function (wireFrame, exitPos) {
    for (var i = 0; i < core.getMazeMap().length; i++) {
      for (var j = 0; j < core.getMazeMap()[i].length; j++) {
        if (core.getMazeMap()[i][j] === 1) {
          addCube(i, j, exitPos);
          console.log(core.getMazeMap()[i][j]);
        }
      }
    }
    addSphere(wireFrame, 2, -1);
  };
  function addCube(x, y, exitPos) {
    var geometry = new THREE.BoxGeometry(size, size, size);
    var material = new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture('images/crate.jpg') });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.set(x * size, size / 2, y * size);
    var scene = core.getScene();
    if (x === exitPos.x && y === exitPos.y) {
      cube.name = 'exitCube';
      exitCubeIndexInCubes = cubes.length;
    }
    scene.add(cube);
    cubes.push(cube);
    var c = document.getElementById('myCanvas');
    var context = c.getContext('2d');
    context.fillStyle = '#5C85FF';
    context.fillRect(x * core.BlockSize, y * core.BlockSize, core.BlockSize, core.BlockSize);
    return cube;
  }
  function addSphere(wireFrame, x, y) {
    var geometry = new THREE.SphereGeometry(size / 2, size, size);
    var material = new THREE.MeshNormalMaterial({
      color: 65535,
      wireframe: wireFrame
    });
    var sphere = new THREE.Mesh(geometry, material);
    sphere.overdraw = true;
    sphere.position.set(x * size, size, y * size);
    var scene = core.getScene();
    scene.add(sphere);
    return sphere;
  }
  Buildings.prototype.addLights = function () {
    var light = new THREE.DirectionalLight(16777215, 1.5);
    light.position.set(1, 1, 1);
    var scene = core.getScene();
    scene.add(light);
    light = new THREE.DirectionalLight(16777215, 0.75);
    light.position.set(-1, -0.5, -1);
    scene.add(light);
  };
  
  Buildings.prototype.collisionDetection = function (position, controls, npcs, callback) {
	  var rays = [
	      new THREE.Vector3(0, 0, 1),
          new THREE.Vector3(1, 0, 1),
          new THREE.Vector3(1, 0, 0), 
          new THREE.Vector3(1, 0, -1),
          new THREE.Vector3(0, 0, -1), 
          new THREE.Vector3(-1, 0, -1),
          new THREE.Vector3(-1, 0, 0), 
          new THREE.Vector3(-1, 0, 1) 
      ];

		var rayHits = [];
	    position = controls.getObject().position;
		for (var i = 0; i < rays.length; ++i) {
		    raycaster.set(position, rays[i]);
		    var npcIntersection = [];
		    if (npcs !== null && npcs !== undefined) {
				npcIntersection = raycaster.intersectObjects(npcs);
				if (npcIntersection.length > 0 && npcIntersection[0].distance <= 15) {
					var npcRemoved = callback(npcIntersection[0].object);
					if (!npcRemoved) {
						controls.isOnObject(true);
						rayHits.push({i: i, dist : npcIntersection[0].distance});
					} 	
				}
			}

		    var intersections = raycaster.intersectObjects(cubes);
		    if (intersections.length > 0 && intersections[0].distance <= 215) {
		        controls.isOnObject(true);
		        rayHits.push({i: i, dist : intersections[0].distance});
		      }
		}

		if (rayHits.length > 0)
		{
			bounceAway(position, rays, rayHits);
		}
	/*	
	var position = controls.getObject().position;
	for (var i = 0; i < rays.length; ++i) {
		
	}
	// Collision detection
    raycaster.ray.origin.copy(position);
    // raycaster.ray.origin.y -= 10;
    var dir = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();
    raycaster.ray.direction.copy(dir);
    var intersections = raycaster.intersectObjects(cubes);
    // If we hit something (a wall) then stop moving in
    // that direction
    if (intersections.length > 0 && intersections[0].distance <= 215) {
      //console.log(intersections.length);
      controls.isOnObject(true);
    }
    */
  };
  function bounceAway (position, rays, rayHits) {
	  var hitIndex = 0;
	  for (var i = 1; i < rayHits.length; ++i) {
		  if (rayHits[i].dist < rayHits[hitIndex].dist) {
			  hitIndex = i;
		  }
	  }
	  var hitRay = rayHits[hitIndex].i;
	  console.log("hitRay: ", rays[hitRay]);
	  var newDir = (hitRay + 4) % 8;
	  console.log("newDir: ", rays[newDir]);
	  var bounce = 10;
	  doMove(position.x + rays[newDir].x/bounce, position.z + rays[newDir].z/bounce, position);
  }
  function doMove(newX, newZ, position) {
	  position.x = newX;
	  position.z = newZ;
  }
  
  Buildings.prototype.openExit = function () {
    var selectedObject = core.getScene().getObjectByName('exitCube');
    core.getScene().remove(selectedObject);
    cubes.splice(exitCubeIndexInCubes, 1);
  };
  return Buildings;
});
