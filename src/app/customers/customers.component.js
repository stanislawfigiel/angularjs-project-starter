import template from './customers.html';
import CustomersController from './customers.controller';



export default class CustomersComponent {
  template = template;
  controllerAs = 'customers';
  controller = CustomersController;
}
