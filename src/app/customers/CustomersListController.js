import Customer from './Customer';

export default class CustomersListController{

  customers = [];

  constructor(){
    let cust1 = new Customer('aa', 'bb', 'cc', 'sss');
    let cust2 = new Customer('ww','ee', 'dd', 'ff');
    this.customers.push(cust1);
    this.customers.push(cust2);
  }
}
