import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-manage',
  standalone: true,
  imports: [HttpClientModule,NgFor],
  templateUrl: './item-manage.component.html',
  styleUrl: './item-manage.component.css',
  providers:[ItemService]
})
export class ItemManageComponent implements OnInit {
  

  public itemList:any = [];

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.itemService.getAll().subscribe(res=>{
      this.itemList = res;
    });
  }

}
