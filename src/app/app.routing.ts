import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {MainPageComponent} from "./main-page/main-page.component";
import {AddOrderComponent} from "./add-order/add-order.component";
import {OrderListComponent} from "./order-list/order-list.component";

const appRoutes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'app-add-order', component: AddOrderComponent},
  {path: 'app-order-list', component: OrderListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
