import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersEditComponent from "./customers-edit.component";


export const editModule = angular.module('app.customers.edit', [])
  .component('customersEdit', new CustomersEditComponent());
