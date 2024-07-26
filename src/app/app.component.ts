import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ItemManageComponent } from './components/item-manage/item-manage.component';
import { RentalManageComponent } from './components/rental-manage/rental-manage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CustomerManageComponent,HomeComponent,ItemManageComponent,RentalManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rental-management-app';
}
