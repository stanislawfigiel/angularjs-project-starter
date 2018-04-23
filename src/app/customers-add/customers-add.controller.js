import Customer from '../customers/Customer';
import CustomersService from '../CustomersService';

export default class CustomersAddController{

  submitText = 'Save changes';
  title = 'Add customer';

  constructor(customersService, $stateParams, $scope, $state, $mdToast) {
    console.log("CONTROLLER ADD CONSTRUCTIOR");
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$scope = $scope;
    this.customersService = customersService;
    this.model = new Customer(null,null,null,null,null);
    this.$mdToast = $mdToast;
  }

  $onInit = () => {

      this.model = new Customer(null,null,null,null,null);
  }

  onSubmit = () => {
    this.customersService.add(this.model)
      .then((res) => {
        if (res.status === 200) {
          // this.$mdToast.show('success');
          // this.$state.go('details', {id: this.model.id});
        }
      })
      .catch(err => {
        // ...
      })
  }
}
