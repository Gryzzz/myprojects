/**
 * @author Charlie Calvert
 */
require.config({
  baseUrl: '.',
  paths: {
    'jquery': 'javascripts/lib/jquery-2.1.1',
    'Three': 'javascripts/lib/three',
    'Control': 'javascripts/Control',
    'Floors': 'javascripts/Floors',
    'PointerLockControls': 'javascripts/lib/PointerLockControls',
    'PointerLockSetup': 'javascripts/lib/PointerLockSetup',
    'Particles': 'javascripts/GameObjects/Particles',
    'Utilities': 'javascripts/Utilities',
    'Shapes': 'javascripts/GameObjects/Shapes',
    'MTLLoader': 'javascripts/MTLLoader',
    'ColladaLoader': 'javascripts/ColladaLoader',
    'OBJMTLLoader': 'javascripts/OBJMTLLoader',
    'Core': 'javascripts/Core',
    'TinyPubSub': 'javascripts/lib/TinyPubSub',
    'Sockets': '/socket.io/socket.io',
    'Buildings': 'javascripts/GameObjects/Buildings',
    'Score': 'javascripts/Score'
  },
  shim: {
    'Three': { exports: 'Three' },
    'TinyPubSub': { exports: 'TinyPubSub' },
    'Sockets': { exports: 'io' },
    'PointerLockControls': { exports: 'PointerLockControls' }
  }
});
require([
  'jquery',
  'Three',
  'Control'
], function (jq, Three, Control) {
  'use strict';
  $(document).ready(function () {
    var control = new Control();
  });
});
