import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { TransactionComponent } from './Admin/transaction/transaction.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { SignupComponent } from './Ass/signup/signup.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {path: "profile", component: ProfileComponent},
    {path: "admin", children:[
        {path: "dashboard", component:DashboardComponent},
        {path: "transaction", component:TransactionComponent}
    ]},
    {path: "view/:id", component:ViewComponent},
    {path: "login", component:LoginComponent, canActivate:[authGuard]},
    {path: "dashbaord", component:DashboardComponent},
    {path: "signup", component:SignupComponent},
    {path: "list", component:ListComponent}
];
