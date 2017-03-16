import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import { MainPageComponent } from './main-page/main-page.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderListComponent } from './order-list/order-list.component';
import {MomentModule} from "angular2-moment";
import {AppService} from "./add-order/add-order.service";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddOrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MomentModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
