
export const routing = ($urlRouterProvider, $locationProvider, $stateProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/customers/list');

  $stateProvider.state({
    name: 'list',
    url: '/customers/list',
    component: 'customersList'
  });

  /*
  stateProvider.state({
    name: 'add',
    url: '/customers/add',
    component: 'addCustomer',
  });

  $stateProvider.state({
    name: 'details',
    url: '/customers/details/:id',
    component: 'customerDetails',
  });
*/
  $stateProvider.state({
    name: 'update',
    url: '/customers/update/:id',
    component: 'editCustomer',
  });



}
