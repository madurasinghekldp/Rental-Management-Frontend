import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [FormsModule,HttpClientModule,NgFor],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.css',
  providers:[CustomerService]
})
export class CustomerManageComponent implements OnInit{

  public customer = {
    name:undefined,
    city:undefined,
    contact:undefined
  };

  public selectedCustomer = {
    id:undefined,
    name:undefined,
    city:undefined,
    contact:undefined
  };

  public modelPurpose:any;

  public customerList:any = [];

  constructor(private customerService:CustomerService){}


  ngOnInit(): void {
    this.loadCustomers();
  }


  createCustomer(){
    this.customerService.create(this.customer).subscribe(data=>{
      this.loadCustomers();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      this.customer = {
        name:undefined,
        city:undefined,
        contact:undefined
      };
    });
  }

  loadCustomers(){
    this.customerService.getAll().subscribe(data=>{
      this.customerList = data;
    });
  }

  deleteCustomer(customer:any){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.customerService.delete(customer.id).subscribe(res=>{
          this.loadCustomers();
          Swal.fire({
            title: "Deleted!",
            text: "Customer deleted.",
            icon: "success"
          });
        });
      }
    });

  }

  loadUpdateCustomer(customer:any) {
    this.selectedCustomer.id = customer.id;
    this.selectedCustomer.name = customer.name;
    this.selectedCustomer.city = customer.city;
    this.selectedCustomer.contact = customer.contact;
  }

  updateCustomer(){
    this.customerService.update(this.selectedCustomer).subscribe(res=>{
      this.loadCustomers();
      Swal.fire({
        title: "Updated!",
        text: "Customer Updated.",
        icon: "success"
      });
    });
  }

}


