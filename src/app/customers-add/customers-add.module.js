import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersAddComponent from "./customers-add.component";


export const addModule = angular.module('app.customers.add', [])
  .component('addCustomer', new CustomersAddComponent());
