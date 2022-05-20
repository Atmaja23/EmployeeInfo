import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit  {
  errMessage: string = '';
  emailIdErr:string='';
  uniqueEmail: boolean = true;
  constructor(private employeeService:EmployeeService,
              private router:Router) { }

   employee = {} as IEmployee;
  listOfEmail:string[]=[];
  
  

  onSubmit(){
    alert('Success!! \n\n'+ JSON.stringify(this.employee,null,4));
    this.employeeService.addEmployee(this.employee).subscribe({
      error: err=> this.errMessage=err
    })
    this.router.navigate(['/employees'])
    .then(()=>{
      window.location.reload();
    });
  }

  onKey(event: any){
    console.log(this.listOfEmail);
    let test = this.listOfEmail.filter(data=> data == this.employee.employeeEmailId);
    if(test.length>1)
       this.emailIdErr='duplicate Email';
    else
    this.emailIdErr='';
    
  }
 
  ngOnInit(): void {
     this.employeeService.getEmailIdList().subscribe({
       next: result=>{
         this.listOfEmail = result;
       }
     })
    
  }

}
