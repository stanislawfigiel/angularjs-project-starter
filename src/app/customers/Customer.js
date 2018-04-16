export default class Customer{
    id='';
    name = '';
    company = '';
    phone = '';
    email = '';
    date = 0;

    constructor(id, name, company, phone, email) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.email = email;
        this.date = Date.now();
    }

}
