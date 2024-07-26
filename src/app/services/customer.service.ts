import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  create(customer:any){
    return this.http.post("http://localhost:8080/cust/add", customer);
  }

  getAll(){
    return this.http.get("http://localhost:8080/cust/all");
  }
}
