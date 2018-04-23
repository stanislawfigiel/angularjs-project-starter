import template from './form.html';
import CustomersAddController from './customers-add.controller';



export default class CustomersAddComponent {
  template = template;
  controller = CustomersAddController;
  controllerAs = 'ctrl';
}
