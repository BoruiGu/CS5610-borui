﻿var app = angular.module("ListManagement", []);
app.controller("ListManagementCtrl", function ($scope) {
    vns = [
        { title: "0008 The Story", date: "2015-02-16", rating: 6.28 },
        { title: "Baldr Sky Dive1 “Lost Memory”", date: "	2009-03-27", rating: 8.58 },
        { title: "Tsuki ni Yorisou Otome no Sahou", date: "2012-10-26", rating: 7.69 },
        { title: "V.G. Neo", date: "2003-12-19", rating: 6.20 },
    ];

    $scope.vns = vns;

    $scope.addItem = function () {
        var newVn = new vn($scope.vn.title, $scope.vn.date, $scope.vn.rating);        
        vns.push(newVn);
        $scope.vn = {};
    };

    $scope.removeItem = function (vn) {
        var index = vns.indexOf(vn);
        vns.splice(index, 1);
    };    

    function startSort(event, ui) {
        ui.item.data("oldIndex", ui.item.index());
    }

    function updateSort(event, ui) {
        var newIndex = ui.item.index();
        var oldIndex = ui.item.data("oldIndex");
        vns.splice(newIndex, 0, vns.splice(oldIndex, 1)[0]);
        $scope.$apply();
    }

    /*This statement must be placed after definition of 
      startSort and updateSort */
    $("tbody").sortable({
        start: startSort,
        update: updateSort
    });
});

function vn(title, date, rating) {
    this.title = title;
    this.date = date;
    this.rating = rating;
}