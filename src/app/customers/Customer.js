export default class Customer{
    name = '';
    company = '';
    phone = '';
    email = '';
    date = 0;

    constructor(name, company, phone, email) {
        this.name = name;
        this.company = company;
        this.phone = phone;
        this.email = email;
        this.date = Date.now();
    }

}
