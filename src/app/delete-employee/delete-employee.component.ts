import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id:any;
  errMessage: string = '';
  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.employeeService.deleteEmployee(this.id).subscribe({
      error: err => this.errMessage = err
    })
  }
  
}
