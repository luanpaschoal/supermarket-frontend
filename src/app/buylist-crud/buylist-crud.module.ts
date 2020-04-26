import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuylistCrudComponent} from "./buylist-crud.component";
import {ItemFormComponent} from "./item/item-form/item-form.component";
import {ItemReadComponent} from "./item/item-read/item-read.component";
import {BuylistCrudRoutingModule} from "./buylist-crud-routing.module";
import {ItemService} from "./item/item.service";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    BuylistCrudRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
  ],
  declarations: [
    BuylistCrudComponent,
    ItemFormComponent,
    ItemReadComponent
  ],
  providers: [
    ItemService
  ]
})
export class BuylistCrudModule {
}
