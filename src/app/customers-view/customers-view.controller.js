export default class CustomersViewController{
  title = 'View customer';

  constructor(customersService, $stateParams, $scope, $state, $mdToast) {
    console.log("CONTROLLER VIEW CONSTRUCTIOR");
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
          this.$scope.$applyAsync();
        })
      });
  }


}
