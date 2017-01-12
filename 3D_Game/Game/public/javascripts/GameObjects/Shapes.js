/**
 * Shapes
 *
 * @author Charlie Calvert
 */
define([
  'MTLLoader',
  'OBJMTLLoader',
  'ColladaLoader',
  'Core'
], function (MTLLoader, OBJMTLLoader, ColladaLoader, Core) {
  'use strict';
  var core = null;
  function Shapes() {
    core = new Core();
  }
  Shapes.prototype.addStarObject = function (npcs, wireFrame, x, y, name) {
    var camera = core.getCamera();
    var loader = new THREE.OBJMTLLoader();
    loader.load('mesh/cone.obj', 'mesh/cone.mtl', function (object) {
      object.position.set(x, 10, y);
      object.name = name;
      /*
             * object.rotateX(-Math.PI / 2); object.rotateZ(-Math.PI / 2);
             */
      core.getScene().add(object);
      npcs.push(object);
    });
  };
  Shapes.prototype.addBuilding = function (wireFrame, x, y) {
    var camera = new Core().getCamera();
    var meshes = [
      'mesh/untitled.dae',
      'mesh/facestar.dae',
      'mesh/Medieval_building.DAE'
    ];
    var loader = new THREE.ColladaLoader();
    loader.load(meshes[0], function (result) {
      result.scene.position.set(x, 6, y);
      core.getScene().add(result.scene);
    });
  };
  Shapes.prototype.addBuildingObject = function (wireFrame, x, y) {
    var camera = new Core().getCamera();
    var loader = new THREE.OBJMTLLoader();
    loader.load('mesh/RuralStallObj/RuralStall.obj', 'mesh/RuralStallObj/RuralStall.mtl', function (object) {
      object.scale.set(0.03, 0.03, 0.03);
      object.position.set(x, 0, y);
      core.getScene().add(object);
      npcs.push(object);
    });
  };
  Shapes.prototype.addNumber = function (wireFrame, x, y, npcValue) {
    // create a canvas element
    var camera = new Core().getCamera();
    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    context1.font = 'Bold 8px Arial';
    context1.fillStyle = 'rgba(55,255,55,0.95)';
    context1.fillText('Hello, world!', 0, 50);
    // canvas contents will be used for a texture
    var texture1 = new THREE.Texture(canvas1);
    texture1.needsUpdate = true;
    var material1 = new THREE.MeshBasicMaterial({
      map: texture1,
      side: THREE.DoubleSide
    });
    material1.transparent = true;
    var mesh1 = new THREE.Mesh(new THREE.PlaneGeometry(canvas1.width, canvas1.height), material1);
    mesh1.position.set(x, 6, y);
    core.getScene().add(mesh1);
  };
  /*
     * var calcRotation = function ( obj, a) { var euler = new THREE.Euler( 0,
     * a, 0, 'XYZ' ); obj.rotation.applyEuler(euler); };
     */
  return Shapes;
});