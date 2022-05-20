import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:any;
  constructor(private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router:Router) { }

  employee = {} as IEmployee;
  errMessage: string = '';
  
  
 
  onSubmit(){
    alert('Success!! \n\n'+ JSON.stringify(this.employee,null,4));
    this.employeeService.updateEmployee(this.id, this.employee ).subscribe({
      error: err=> this.errMessage=err
    })
    this.router.navigate(['/employees'])
    .then(()=>{
      window.location.reload();
    });
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.employeeService.viewEmployeeById(this.id).subscribe({
      next: employee=>{
        this.employee = employee;
      },
      error: err=> this.errMessage=err
    });
  }

}
