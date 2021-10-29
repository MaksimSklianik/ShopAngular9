import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminLayoutComponent} from './shared/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {AddPageComponent} from './add-page/add-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {OrdersPageComponent} from './orders-page/orders-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';


@NgModule({

  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    AddPageComponent,
    EditPageComponent,
    OrdersPageComponent,
    DashboardPageComponent
  ],

  imports: [CommonModule, RouterModule.forChild([
    {
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'add', component: AddPageComponent},
        {path: 'orders', component: OrdersPageComponent},
        {path: 'product/:id/edit', component: EditPageComponent},
      ]
    }
  ])],
  exports: [RouterModule],


})


export class AdminModule {

}
