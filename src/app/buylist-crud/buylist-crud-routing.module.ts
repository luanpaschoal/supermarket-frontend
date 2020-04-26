import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuylistCrudComponent} from "./buylist-crud.component";
import {ItemFormComponent} from "./item/item-form/item-form.component";

const routes: Routes = [
  {
    path: '',
    component: BuylistCrudComponent
  },
  {
    path: 'items',
    component: BuylistCrudComponent
  },
  {
    path: 'items/:state',
    component: ItemFormComponent
  },
  {
    path: 'items/:state/:id',
    component: ItemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuylistCrudRoutingModule { }
