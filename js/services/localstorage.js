
'use strict';

/* Services */

var todoServices = angular.module('todoServices', []);

todoServices.factory('storageService', function(){
    return {
      get: function () {
        return JSON.parse(localStorage.getItem('todo') || '[]');
      },

      put: function (todos) {
        localStorage.setItem('todo', JSON.stringify(todos));
      }
    };
  });

  