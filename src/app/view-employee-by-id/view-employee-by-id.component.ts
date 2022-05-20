import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-view-employee-by-id',
  templateUrl: './view-employee-by-id.component.html',
  styleUrls: ['./view-employee-by-id.component.css']
})
export class ViewEmployeeByIdComponent implements OnInit {
  id:any;
  employee = {} as IEmployee;
  errMessage: string = '';
  constructor(private route: ActivatedRoute,
    private employeeService:EmployeeService) { }

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
