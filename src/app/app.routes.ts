import { Routes } from '@angular/router';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { HomeComponent } from './components/home/home.component';
import { ItemManageComponent } from './components/item-manage/item-manage.component';
import { RentalManageComponent } from './components/rental-manage/rental-manage.component';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"customer",
        component: CustomerManageComponent
    },
    {
        path:"item",
        component: ItemManageComponent
    },
    {
        path:"rental",
        component: RentalManageComponent
    }
];
