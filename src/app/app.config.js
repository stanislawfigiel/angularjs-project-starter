
angular.
module('customers').
config([$urlRouterProvider,$stateProvider,$locationProvider,$routeProvider,
  function config($locationProvider, $routeProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/customers/list');

    $stateProvider.state({
      name: 'list',
      url: '/customers/list',
      component: 'customersList',
    })

  }]);


