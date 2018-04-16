import template from './form.html';
import CustomersEditController from './customers-edit.controller';



export default class CustomersEditComponent {
  template = template;
  controller = CustomersEditController;
  controllerAs = 'ctrl';
}
