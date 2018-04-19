import template from './view.html';
import CustomersViewController from './customers-view.controller';



export default class CustomersViewComponent {
  template = template;
  controller = CustomersViewController;
  controllerAs = 'ctrl';
}
