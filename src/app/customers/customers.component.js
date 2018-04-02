import template from './list.html';
import CustomersListController from './CustomersListController';


export default class CustomersComponent {
  template = template;
  controllerAs = 'list';
  controller = CustomersListController;
}
