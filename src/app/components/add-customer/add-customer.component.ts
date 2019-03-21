import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Customer } from '../../models/Customer'
import { CustomersService } from '../../services/customers.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  notes: string = '';

  constructor(
    private _title: Title,
    private _customersService: CustomersService,
    private _router: Router,
    private _fms: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Company Crm | Add Customers Forms')
    this.headerTitle = 'Add Customer Form'
    this.headerIcon = 'fas fa-user-plus'
  }

  onSubmit({ value, valid }: { value: Customer, valid: boolean }): void {

    if (valid) {

      this._fms.show('New Customer saved!', {
        cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center',
        timeout: 3000
      });
      this._customersService.addCustomer(value);
      this._router.navigate(['/customers']);
    }

  }

}
