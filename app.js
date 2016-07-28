/**
 * Created by robertfrieden on 7/28/16.
 */
'use strict'

var app = angular.module('cantina',['ui.bootstrap']);

app.controller('toDoCtrl', function ($scope) {

    $scope.addNew = function (newStuff) {
        if (newStuff.length > 0) {
            var item = {
                description: newStuff,
                selected: true
            }
            $scope.toDoList.push(item);
        }
        $scope.toDoInput = '';
    }

    $scope.toDoList = [
        {
            description: "An incomplete to-do list item will look like this",
            selected: false
        },
        {
            description: "An incomplete to-do list item will look like this",
            selected: false
        },
        {
            description: "An incomplete to-do list item will look like this",
            selected: false
        },
        {
            description: "An incomplete to-do list item will look like this",
            selected: false
        },
        {
            description: "A complete to-do list item will look like this",
            selected: true
        },
        {
            description: "A complete to-do list item will look like this",
            selected: true
        },
        {
            description: "A complete to-do list item will look like this",
            selected: true
        },
        {
            description: "A complete to-do list item will look like this",
            selected: true
        }
    ];
});