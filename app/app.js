'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.security'
]).
        config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/view1', {
                    templateUrl: 'view1/view1.html',
                    controller: 'View1Ctrl',
                    controllerAs: 'ctrl'
                });
                $routeProvider.when('/view2', {
                    templateUrl: 'view1/view2.html',
                    controller: 'View2Ctrl',
                    controllerAs: 'ctrl'
                });
                $routeProvider.otherwise({redirectTo: '/view2'});
            }]);
