export default class CustomersService {
  constructor($http) {
    this.$http = $http;
  }

  getHeaders = () => ({
    'Content-Type': 'application/json',
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    'Access-Control-Allow-Origin': '*',
    'X-User-ID': 'adrian'
  });

  add = (customer) => {
    return fetch(API + '/add', {
      headers: this.getHeaders(),
      method: 'POST',
      body: JSON.stringify({ customer: customer }),
    })
  }

  getList = () => {
    return fetch(API + '/customers', {
      headers: this.getHeaders(),
      method: 'GET',
    });
  }

  getDetails = (id) => {
    return fetch(API + '/customer/' + id, {
      headers: this.getHeaders(),
      method: 'GET',
    })
  }

  update = (customer) => {
    return fetch(API + '/update/' + customer.id, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({ customer: customer }),
    });
  }

  delete = (id) => {
    return fetch(API + '/delete/' + id, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }
}
