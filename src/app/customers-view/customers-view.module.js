import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersViewComponent from "./customers-view.component";


export const viewModule = angular.module('app.customers.view', [])
  .component('viewCustomer', new CustomersViewComponent());
