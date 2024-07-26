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

  public customerList:any = [];

  constructor(private customerService:CustomerService){}


  ngOnInit(): void {
    this.loadCustomers();
  }

  createCustomer(){
    this.customerService.create(this.customer).subscribe(data=>{
      console.log(data);
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

  }

  updateCustomer(customer:any){
    
  }

}


