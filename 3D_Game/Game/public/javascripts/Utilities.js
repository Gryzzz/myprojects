define([require], function () {
  'use strict';
  function Utilities() {
    var showDebug = function (data) {
      console.log(data);
    };
    var showError = function (request, ajaxOptions, thrownError) {
      showDebug('Error occurred: = ' + ajaxOptions + ' ' + thrownError);
      showDebug(request.status);
      showDebug(request.statusText);
      showDebug(request.getAllResponseHeaders());
      showDebug(request.responseText);
    };
  }
  return Utilities;
});