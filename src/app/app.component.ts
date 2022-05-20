import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Employee-Data Management</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" routerLink='/welcome'>Home </a>
      <a class="nav-item nav-link" routerLink='/addEmployee'>Add Employee Information</a>
      <a class="nav-item nav-link" routerLink='/employees'>Employee List</a>
     
    </div>
  </div>
</nav>

<div class='container'>
<router-outlet></router-outlet>
</div>`
  
})
export class AppComponent {
  title = 'EmployeeInfo';
}
