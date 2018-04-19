import Customer from '../customers/Customer';
import customersService from '../CustomersService';
export default class CustomersListController{

  customers = [];


    constructor(customersService,$state, $scope) {
      this.customersService = customersService;
      this.$state = $state;
      this.$scope = $scope;
  }


  $onInit = () => {
    this.loading = true;
    this.customersService.getList()
      .then(res => {
        res.json().then(data => {
          this.customers = data.customers;
          this.loading = false;
          this.$scope.$applyAsync();
        })
      })
  }


  showDetails = (id) => {
    this.$state.go('details', { id: id });
  }



  edit = customer => {
    console.log("EDYCJA", customer)
    this.$state.go('edit', { id: customer.id })
  }

  delete = id => {
    const index = this.customers.map(a => a.id).indexOf(id);
    this.customers.splice(index, 1);

    this.customersService.delete(id)
      .then(res => {
        console.log(res);
      })
  }




}
