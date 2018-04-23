import template from '../customers-edit/form.html';
import CustomersAddController from './customers-add.controller';



export default class CustomersAddComponent {
  template = template;
  controller = CustomersAddController;
  controllerAs = 'ctrl';
}
