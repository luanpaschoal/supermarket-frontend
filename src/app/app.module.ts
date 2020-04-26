import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";

import {LOCALE_ID, NgModule} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import {HeaderComponent} from './template/header/header.component';
import {NavComponent} from "./template/nav/nav.component";
import {HomeComponent} from "./home/home.component";
import {MatIconModule} from "@angular/material/icon";
import {SidenavService} from "./template/nav/sidenav.service";
import {ConfirmationDialog} from "./utils/confirmation-dialog/confirmation-dialog.component";
import {BuylistCrudModule} from "./buylist-crud/buylist-crud.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,

    ConfirmationDialog
  ],
  entryComponents: [ConfirmationDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,

    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,


    BuylistCrudModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  },
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
