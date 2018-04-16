import template from './list.html';
import CustomersListController from './customers-list.controller';



export default class CustomersListComponent {
  template = template;
  controllerAs = 'list';
  controller = CustomersListController;
}
