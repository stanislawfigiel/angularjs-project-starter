import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersComponent from './customers.component';
import {listModule} from '../customers-list/customers.list.module';
import {routing} from "../app.module";

export const customersModule = angular.module('customers',[
  listModule.name
  ])
  .component('customers', new CustomersComponent())
;
