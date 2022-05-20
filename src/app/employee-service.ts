import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IEmployee } from "./Employee";





@Injectable({
    providedIn:"root",
})
export class EmployeeService{
    private addEmployeeUrl="http://localhost:8080/api/employees/addEmployee";
    private updateEmployeeUrl="http://localhost:8080/api/employees/updateEmployeeById/";
    private deleteEmployeeUrl="http://localhost:8080/api/employees/deleteEmployeeById/";
    private viewAllEmployeeUrl="http://localhost:8080/api/employees/viewAllEmployees";
    private viewEmployeeByIdUrl="http://localhost:8080/api/employees/getEmployeeById/";
    private listOfEmailUrl="http://localhost:1000/getListOfEmailId";
    
    
    constructor(private http: HttpClient){ }
  
   
    //Add Employee
    addEmployee(employee: IEmployee): Observable<IEmployee>{
      
        return this.http.post<IEmployee>(this.addEmployeeUrl,employee).pipe(
            catchError(this.handleError)

        )
    }

    //update Employee

    updateEmployee(employeeId:number,employee:IEmployee):Observable<IEmployee>{
      
        return this.http.put<IEmployee>(this.updateEmployeeUrl + employeeId , employee ).pipe(
            catchError(this.handleError)

        )
    }

    //delete Employee

    deleteEmployee(employeeId:number):Observable<IEmployee>{
       
        return this.http.delete<IEmployee>(this.deleteEmployeeUrl+ employeeId ).pipe(
           tap(data=> console.log('deleted Employee is: ',JSON.stringify(data))),
           catchError(this.handleError)

        )

    }
    //view All Employee
     viewAllEmployee():Observable<IEmployee[]>{
     
         return this.http.get<IEmployee[]>(this.viewAllEmployeeUrl).pipe(
             tap(data => console.log('All: ', JSON.stringify(data))),
             catchError(this.handleError)
         );
     }

     //view Employee By Id
     viewEmployeeById(employeeId:number):Observable<IEmployee>{
      
         return this.http.get<IEmployee>(this.viewEmployeeByIdUrl + employeeId).pipe(
             tap(data => console.log('employee with id: ',employeeId,'is: ',JSON.stringify(data))),
             catchError(this.handleError)

         )
     }

     //duplicate Employee emailId
     getEmailIdList():Observable<string[]>{
        
          return this.http.get<string[]>(this.listOfEmailUrl ).pipe(
            catchError(this.handleError)
          )
     }
    

     

    private handleError(err: HttpErrorResponse){
        let errMsg = '';
            if(err.error instanceof ErrorEvent){
                errMsg = `An error occured: ${err.error.message}`;
            }else{
                errMsg = `server returned code: ${err.status}, error message ${err.message}`;
            }
            console.error(errMsg);
            return throwError(errMsg);
    }




}