export default class CustomersController {

  constructor($state) {
    this.$state = $state;
  }

  addCustomer = () => {
    console.log("dodajemy");
    this.$state.go('add');
  };

  showList = () => {
    console.log('lista pokazujemy');
    this.$state.go('list');
  };


}
