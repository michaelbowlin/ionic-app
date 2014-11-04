(function () {
    'use strict';

    angular.module('eliteApp').controller('TeamsCtrl', ['eliteApi', TeamsCtrl]);

    function TeamsCtrl(eliteApi) {
        var vm = this;
        
        var data = eliteApi.getLeagueData();
        console.log(data);
        vm.teams = data.teams;

    };
})();

