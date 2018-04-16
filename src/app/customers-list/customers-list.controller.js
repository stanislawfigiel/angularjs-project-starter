import Customer from '../customers/Customer';

export default class CustomersListController{

  customers = [];


    constructor($state, $scope) {
      this.$state = $state;
      this.$scope = $scope;




    let cust1 = new Customer(1, 'aa', 'bb', 'cc', 'sss');
    let cust2 = new Customer(2, 'ww','ee', 'dd', 'ff');
    this.customers.push(cust1);
    this.customers.push(cust2);
  }


  showDetails = (id) => {
    this.$state.go('details', { id: id });
  }

  edit = customer => {
    console.log("EDYCJA", customer)
    this.$state.go('update', { id: customer.id })
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
