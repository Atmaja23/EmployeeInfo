import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeByIdComponent } from './view-employee-by-id/view-employee-by-id.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DeleteEmployeeGuardGuard } from './delete-employee/delete-employee-guard.guard';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRenderer } from './employee-list/button-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    ViewEmployeeByIdComponent,
    BtnCellRenderer
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer]),
    RouterModule.forRoot([
      {path: 'addEmployee',component: AddEmployeeComponent},
      {path: 'deleteEmployee/:id', 
      canActivate:[DeleteEmployeeGuardGuard] ,
      component: DeleteEmployeeComponent},
      {path: 'updateEmployee/:id',component:UpdateEmployeeComponent},
      {path: 'employees', component: EmployeeListComponent},
      {path: 'viewEmployee/:id',component: ViewEmployeeByIdComponent},
      {path: 'welcome',component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch:'full'},
      {path: '***', redirectTo: 'welcome', pathMatch:'full'}

  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
