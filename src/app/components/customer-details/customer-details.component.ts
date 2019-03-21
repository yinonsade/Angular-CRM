import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomersService } from '../../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  headerTitle: string;
  headerIcon: string;
  id: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  };

  constructor(
    private _customersService: CustomersService,
    private _routet: Router,
    private _activatedRoute: ActivatedRoute,
    private _title: Title
  ) { }

  ngOnInit(): void {
    this._title.setTitle('Company Crm\ Customer deatails page');
    this.headerTitle = 'Customer Details page';
    this.headerIcon = 'fas fa-user';
    this.id = this._activatedRoute.snapshot.params['id'];
    this._customersService.getCustomer(this.id).subscribe(customer => this.customer = customer);
  }

}
