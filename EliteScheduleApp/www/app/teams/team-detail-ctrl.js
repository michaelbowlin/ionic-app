(function () {
    'use strict';

    angular.module('eliteApp').controller('TeamDetailCtrl', ['$stateParams', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams) {
        var vm = this;
        
        console.log("$stateParams", $stateParams);

    };
})();