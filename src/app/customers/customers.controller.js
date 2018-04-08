export default class CustomersController {

  constructor($state) {
    this.$state = $state;
  }

  addCustomer = () => {

    console.log("dodajemy");
  };

  showList = () => {
    console.log('lista pokazujemy');
    this.$state.go('listx');
  };


}
