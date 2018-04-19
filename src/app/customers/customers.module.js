import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import CustomersComponent from './customers.component';
import {listModule} from '../customers-list/customers.list.module';
import {editModule} from '../customers-edit/customers.edit.module';
import {viewModule} from '../customers-view/customers-view.module';
import CustomersService from '../CustomersService';
import {routing} from "../routing";

export const customersModule = angular.module('app.customers',[
  listModule.name,
  editModule.name,
  viewModule.name

  ])
  .component('customers', new CustomersComponent())
  .config(routing)
  .service('customersService', CustomersService)
;
