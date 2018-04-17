import Customer from '../customers/Customer';
import CustomersService from '../CustomersService';

export default class CustomersEditController{

  submitText = 'Save changes';
  title = 'Edit customer';

  constructor(customersService, $stateParams, $scope, $state, $mdToast) {
    console.log("CONTROLLER EDIT CONSTRUCTIOR");
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.$scope = $scope;
    this.customersService = customersService;
    this.model = {};
    this.$mdToast = $mdToast;
  }

  $onInit = () => {
    const id = this.$stateParams.id;
    this.customersService.getDetails(id)
      .then(res => {
        res.json().then(data => {
          this.model = data.customer;
          // naprawia wyświetlanie modelu danych
          this.$scope.$applyAsync();
        })
      });
  }

  onSubmit = () => {
    this.customersService.update(this.model)
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
