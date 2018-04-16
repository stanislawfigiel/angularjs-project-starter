import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import {AppComponent} from './app.component';
import CustomersComponent from "./customers/customers.component";
import CustomersListComponent from './customers-list/customers-list.component';
import {customersModule} from "./customers/customers.module";

const materialConfig = $mdThemingProvider => {
  $mdThemingProvider.theme('default');
};



export const appModule = angular
  .module('app', [
    uiRouter,
    'ngMaterial',
    customersModule.name

  ])
  .component('app', new AppComponent())
  // .component('customers', new CustomersComponent())
  // .config(routing)
  .config(materialConfig)
  // .component('customersList', new CustomersListComponent())




