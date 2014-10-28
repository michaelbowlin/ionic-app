(function() {
    'use strict';

    // 'eliteApi' is our service and it's injected 
    angular.module('eliteApp').controller('LeaguesCtrl', ['$state','eliteApi', LeaguesCtrl]);

    function LeaguesCtrl($state, eliteApi){ // constructor function

        var vm = this;

		var leagues = eliteApi.getLeagues();
		vm.leagues = leagues;

		vm.selectLeague = function(leagueId){
			//TODO: Select corret league
			$state.go("app.teams");

		}

		//var leagueData = eliteApi.getLeagueData();
		//console.log(leagues, leagueData);		
    }

 
})();