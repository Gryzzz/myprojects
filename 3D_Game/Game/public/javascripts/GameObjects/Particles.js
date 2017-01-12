define([
  'Utilities',
  'Shapes',
  'Control',
  'Core'
], function (utilities, Shapes, Control, Core) {
  'use strict';
  /*
     * var size=20; var npc;
     *
     * var particles=[];
     */
  var size = 40;
  var particles = [];
  var npcs = [];
  var that = null;
  var shapes = new Shapes();
  var core = new Core();
  var particleBaseName = 'p';
  var npcCount = 0;
  function Particles() {
    that = this;
  }
  function showParticles(x, y, partName, setColor) {
    var geometry = new THREE.IcosahedronGeometry(10, 2);
    var material = new THREE.PointCloudMaterial({
      color: setColor,
      size: 0.5
    });
    var particleSystem = new THREE.PointCloud(geometry, material);
    particleSystem.position.set(x, 10, y);
    particleSystem.name = partName;
    core.getScene().add(particleSystem);
    particles.push(particleSystem);
    npcs.push(particleSystem);
  }
  Particles.prototype.rotateParticlesAroundWorldAxis = function (npcIndex, axis, radians, npc) {
    if (npcs.length > 0) {
      for (var i = 0; i < npcs.length; i++) {
        var object;
        if (npc === true) {
          object = npcs[i];
        } else {
          object = particles[i];
        }
        that.rotWorldMatrix = new THREE.Matrix4();
        that.rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
        that.rotWorldMatrix.multiply(object.matrix);
        // pre-multiply
        object.matrix = that.rotWorldMatrix;
        object.rotation.setFromRotationMatrix(object.matrix);
      }
    }
  };
  Particles.prototype.initNpc = function (level) {
    $.ajax({
      url:"viewRaw?designDoc=gameState&view=docNpcs&level=" + 1,
      cache: false,
      type: 'GET',
      dataType: 'json',
      success: function (npcData) {
        // utilities.showDebug('Opening file: ' + fileName);
        npcCount = 0;
        //core.initMazeMap(gridData.length, gridData[0].length); todo? 
        //flipped order?
        npcData[0].npcs.forEach(function(npc){
            console.log("npcName: " + npc.npc_name + 'npcValue: ' + npc.value);
            var partName = getName(particleBaseName, npc.row, npc.col);
        	
            showParticles(npc.row * size, npc.col * size, partName, npc.color);
            shapes.addStarObject(npcs, false, npc.row * size, npc.col * size, partName + 'S');
            var c = document.getElementById('myCanvas');
            var context = c.getContext('2d');
            context.fillStyle = npc.color;
            context.fillRect(npc.row * core.BlockSize, npc.col * core.BlockSize, core.BlockSize, core.BlockSize);
            npcCount++;
            core.getMazeMap()[npc.row][npc.col] = {
				npctype: "npc",
				value: npc.value,
				color: npc.color,
				name: npc.npc_name,
				q: npc.question,
				a : npc.answer};
        });
      },
      error: utilities.showError
    });
  };
  Particles.prototype.isNpc = function (x, y) {
	var grid = core.getMazeMap();
    if (grid !== null && x >= 0 && x < grid.length && y >= 0 && y < grid[0].length) {
      return grid[x][y].npctype === "npc";
    }
    return false;
  };
  function getName(baseName, x, y) {
    return baseName + x + 'x' + y;
  }
  Particles.prototype.setNpc = function (x, y, val) {
	var grid = core.getMazeMap();
    if (grid[x][y].npctype === "npc" && val === 0) {
      var objectName = getName(particleBaseName, x, y);
      var selectedObject = core.getScene().getObjectByName(objectName);
      core.getScene().remove(selectedObject);
      selectedObject = core.getScene().getObjectByName(objectName + 'S');
      core.getScene().remove(selectedObject);
      npcCount--;
    }
    grid[x][y] = val;
    //display how many npcs left
    $('#npcLeft').html(' ' + npcCount + ' ');
    return npcCount;
  };
  Particles.prototype.npcs = function () {
	  return npcs;
  };
  return Particles;
});
