var env_local = "localhost";
	
var ui_environment = env_local;
var service_environment = "192.168.0.25";

var appPort = ":8091";
var servicePort = ":9090";


var appUIURL = "http://" + ui_environment + appPort + "/";
var serviceUrl = "http://" + service_environment + servicePort + "/iaewis/";

var $dashboard = angular.module('dashboard', [ 'ngRoute', 'ngResource',
		'ngMaterial', 'ngAnimate', 'ngAria', 
		'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.rowEdit',
		'ui.grid.cellNav', 'ui.grid.resizeColumns', 'ui.grid.pinning',
		'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter',
		'ui.grid.importer', 'ui.grid.grouping', 'ui.grid.pagination' ]);

$dashboard
.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'view/home.html',
		controller : 'homepagectrl',
		reloadOnSearch: false
	})
}],
[ '$mdThemingProvider', function($mdThemingProvider) {
	  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
	  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
	  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
	  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
	}]

);

