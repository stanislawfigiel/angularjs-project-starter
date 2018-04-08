import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersListComponent from "./customers-list.component";


export const listModule = angular.module('app.customers.list', [])
  .component('list', new CustomersListComponent());
