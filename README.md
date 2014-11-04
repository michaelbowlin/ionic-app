# Simple Ionic Application 

This is a repo that follows that tutorial for Ionic Framework.  The tutorial can be found on Pluralsight.

 - [Tutorial Instructions](#apex)
 - [Directory Structure](#directory)
 - [Versioning](#versioning)
 - [Documentation](#documentation)
 - [Technologies used](#technologies)
 - [Contributing](#contributing)
 


## Site map

Our sample app site map

```
├──Leagues 
│   ├──Teams
│   │   ├──Team detail
│   │   │   ├──Game
│   ├──Standings
│   ├──Locations
│   │   ├──Location schedule
│   │   ├──Location map
│   ├──Rules
├── My Teams 

```

## Local Directory Structure

Directory structure:
```
├── ionic-app 
│   ├──  
│   │   ├──  
│   │   ├──  
│   │   │   ├──  
│   │   │   ├──  
│   │   │   │   ├──  
│   │   │   │   ├──  

```


## Documentation

 

### Running documentation locally


 

## Versioning 

For transparency into our release cycle and in striving to maintain backward compatibility, this framework is maintained under [the Semantic Versioning guidelines](http://semver.org/).

## Technologies used

This will document all the third-party code we use. So far, this includes:

- Ionic


## Contributing

Please read through our [contributing guidelines](https://github.com/...CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Editor preferences are available in the [editor config](https://github.com/....editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.


## IonicApp instructions

1. Course Overview
	- Getting Started
	- Navigation and Routing
	- Ionic Components
	- Data and Caching
	- Mapping
	- Customizing Ionic
	- ngCordova  

2.  Getting started
	- Command line features (switches)
		- start (new ionic project)
		- serve (starts a local development server)
		- platform (configure platform targets)
		- build (locally build app for a platform)
		- emulate (emulate app in simulator)
		- run (run app on device)

		- Install:
			- install node
			- in terminal
				- sudo npm install iconic -g
				- sudo npm install cordova -g
	
	- Starting a new project
		- will us: ionic start [appName][template]
		- in terminal:
			- iconic start firstIonicApp blank
				- (blank is the starter template)

	- Run your app
		- there are 3 ways to test your app
			- 1) Local browser
				- in terminal
					- ls -la
					- cd firstIonicApp
					- ionic serve
						- Check it out in Chrome with the emulator tools
			- 2) Emulator
				- first install the Android SDK
					- http://developer.android.com/sdk/index.html
					- TUT: https://www.youtube.com/watch?v=WpeWcApE9q0
				- ionic platform add android
				- ionic build android
				- * Problems? go to ionic instalation website: https://www.youtube.com/watch?v=WpeWcApE9q0
			- 3) Device 
				- ionic run android 
		
	- Ionic starter template
		- 4 Templates:
			- Blank
			- Tabs
			- Side Menu
			- Maps
		- in console:
			- ionic start ionicTabsApp tabs
				- cd ionicTabsApp
				- ionic serve (which opens your browser)
			- ionic start EliteScheduleApp sidemenu
				- cd EliteScheduleApp
				- ionic serve
	- Setting up your development enviornment
		- drag EliteScheduleApp into Sublime
		- Lots of cool inspiration on CodePen.io

3. Navigation and Routing
	- Overview
		- Headers and Footer
		- Tabs
		- Side Menu
		- Angular UI Routing
	- In CodePen we added a header and footer
		- http://codepen.io/5daily/pen/ungkB?editors=101
	- In CodePen we're adding a tab interface
	- Open the EliteScheduleApp in Sublime Text
		- in the WWW folder 
			- add another folder called APP (this is where everything will be kept)
				- add a file in the app folder called app.js
				- then in the index.html
				- change the js src to app/app.js	
				- enter the code that can be found in the file
				- in app folder:
				- create a home folder
				- inside the home folder create page home.html
					- check home.html to see code
			- Adding side menu
				- in the App folder create layout folder with menu-layout.html
				- put in starter code (can be seen in the page itself)
				- next create a route in the app.js (can be seen in the page itself)
					- in the app.js file also change the default (.otherwise) to app
	- Angular UI Routing
		- Routing framework for AngularJS
		- Organize into State Machines
			- instead of dealing with views directly it puts your code into state machines
		- Allows for nested views
		- 3 ways to activate a state
			- ui-sref
			- url
			- $state.go()
		- The angular UI Routing characteristics are:
			- Unique Name
			- URL (supports parameters)
			- Template/TemplateUrl
				- typically use a template url which does need to point to a physical resource (typically an html partial)
				- Controllers (optional)
					- example of state:
						- $stateProvider.state("contacts",{
							- url: "/contacts",
							- templateUrl: "contacts.html"
						- })
4. IMPORTANT - Skipped taking notes for the remainder of 'Navigation and Routing'. Will come back to document the steps later

5. Ionic Components
	- Overview
		- Lists
			- Group data with list-dividers
			- Customize list data
		- Grid (system for alignment)
		- Cards (displaying info in your app)
		- Toggles and Buttons
		- Ionic Popup
	- Working with static data
		- Go to the Elite Schedule App and grab the data: http://elite-schedule.net/api/leaguedata/2009
		- Download Postman: https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop
		- Copy the url: http://elite-schedule.net/api/leaguedata/2009 and paste it in your postman app
	- creat an Angular service for this
		- Make a folder called "services" in the "app" folder.
		- Inside the "services" folder add a file called "eliteApi.js" (which is a regular angular service.. see the code in eliteApi.js)
			- We are creating an Angular service and using the revealing module pattern  to reveal our two functions.
		- make sure you add it to the index.html
	- In leagues.html and add the LeaguesCtrl
		- (see code)
	- In the "home" folder create leagues-ctrl.js
		- First create LeaguesCtrl (see code)
		- Then inject our Angular service
			- then to prove that it's working we'll
				- Create two variables and then console.log(leagues, leagueData)
					- (see code)
	- Adding a basic Ionic List
		- List control
			- delete the lines of code we used to console.log our data
			- create a property of leauges off our view model
				- vm.leagues = leagues;
			- in leagues.html
				- Using the "controler as" syntax
				- put a div with the class of list (see code)
				- make an a tag with the class of item
					- indiviual items can be nested div tags or a tags as long as they have a class of item
				- in that a tag put in an ng-repeat
					- <a class="item" ng-repeat="league in vm.leagues"></a>
				- then data bind to the league name
					- {{ league.name }}
				- put in a simple icon following the data
					- <i class="icon ion-chevron-right icon-accessory"></i>
				- add an ng-click directive
					- <a class="item item-icon-right" ng-repeat="league in vm.leagues"
				ng-click="vm.selectLeague(league.id)" ng-click="vm.selectLeague(league.id)">
			- in leagues-ctrl.js
				- (now we'll need to create a "selectLeague" method over in our controller)
				- add in function vm.selectLeague (see code)
					- (inside there use the state object in order to navigate)
				- inject the '$state' object in the .module
				- make sure you add it to the constructor function as well
					- function LeaguesCtrl($state, eliteApi)
						- normally we'd have to select the league by querying the data
			- Create locations-ctrl.js in the locations folder
				- Add your typical controller
					-	"LocationsCtrl" (see code)
				- Injecting the eliteApi (see code)
				- get locaions data
					- set a property on the view model 
						- vm.locations = data.locations;
			- go to locations.html
				- add ng-controller="Locations as vm"
				- add a div with a list (not anchor tags just nested divs)
					- ng-repeat="location in vm.locations" (see code)
					- {{location.name}}
			- go to index.html
				- add the reference to the controller (script etc.)
	- List dividers for grouped data 	


								











 
