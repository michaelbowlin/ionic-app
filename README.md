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


## Apex Build Instructions

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

4.
7. 
	-  
		-  
			-  
