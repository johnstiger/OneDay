import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './client//login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { IndexComponent } from './client/index/index.component';
import { HomeComponent } from './client/home/home.component';
import { FooterComponent } from './client/footer/footer.component';
import { UserHomeComponent } from './client/user-home/user-home.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminregisterComponent } from './admin/adminregister/adminregister.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { BusesComponent } from './admin/buses/buses.component';
import { DriversComponent } from './admin/drivers/drivers.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { UpdateBusComponent } from './admin/update-bus/update-bus.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { UpdateDriverComponent } from './admin/update-driver/update-driver.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { BusSpecsComponent } from './admin/bus-specs/bus-specs.component';
import { AddDriverComponent } from './admin/add-driver/add-driver.component';
import { AboutComponent } from './client/about/about.component';
import { TokenGuard } from './guards/token/token.guard';
import { ClientGuard } from './guards/token/client.guard';
import { BookingFormComponent } from './client/booking-form/booking-form.component';
import { HistoryComponent } from './client/history/history.component'
// import { BusinfoComponent } from './client/businfo/businfo.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'client/register', component: RegisterComponent },
  { path: 'client/login', component: LoginComponent },
  { path: 'client/about', component: AboutComponent },
  {path: 'client/history', component:HistoryComponent, canActivate :[ClientGuard]},
  { path: 'index', component: IndexComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'userhome', component: UserHomeComponent, canActivate :[ClientGuard] },
  { path: 'admin/login', component: AdminloginComponent },
  { path: 'admin/register', component: AdminregisterComponent },
  { path: 'userhome/client/booking', component:BookingFormComponent },

  {
    path: 'admin', component: NavbarComponent , canActivate :[TokenGuard],
    children: [
      { path: 'bookings', component: BookingsComponent },
      { path: 'buses', component: BusesComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'update-bus/:id', component: UpdateBusComponent },
      { path: 'bus_specs/:id', component: BusSpecsComponent },
      { path: 'update-user/:id', component: UpdateUserComponent },
      { path: 'add-driver', component: AddDriverComponent },
      { path: 'add-bus', component: AddBusComponent }

    ]
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }