import { Component,  OnInit} from '@angular/core';
import { GridReadyEvent, IServerSideDatasource, IServerSideGetRowsRequest, PaginationNumberFormatterParams, ServerSideStoreType } from 'ag-grid-community';
import { IEmployee } from '../Employee';
import { EmployeeService } from '../employee-service';
import { BtnCellRenderer } from './button-cell-renderer.component';

import 'ag-grid-enterprise';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  // employees: IEmployee[]=[];
  // filteredEmployees:IEmployee[]=[];
  errMessage: string = '';
  // private listFilter:string='';
  // //for pagination
  // page: number = 1;
  // count:number = 0;
  // tableSize:number = 7;
  
  
  // get getListFilter():string{
  //   return this.listFilter;
  // }

  // set setListFilter(value:string){
  //   this.listFilter = value;
  //   this.filteredEmployees = this.performFilter(this.listFilter);
  // }

  // performFilter(value:string):IEmployee[]{
  //   value= value.toLocaleLowerCase();
  //   return this.employees.filter((employee:IEmployee)=>
  //   employee.employeeName?.toLocaleLowerCase().includes(value));

  // }
  public paginationPageSize = 10;
  public serverSideStoreType: ServerSideStoreType = 'partial';
  public rowModelType: 'clientSide' | 'infinite' | 'viewport' | 'serverSide' =
  'serverSide';
  rowHeight = 50;
 
  columnDefs = [
    { headerName: "Employee Id", field:"employeeId", sortable:true, filter: true},
    { headerName: "Name", field:"employeeName", sortable:true, filter: true},
    { headerName: "Department", field:"employeeDepartment", sortable:true, filter: true},
    { headerName: "Contact Number", field:"employeeContactNumber", sortable:true, filter: true},
    { headerName: "Address", field:"employeeAddress", sortable:true, filter: true},
    { headerName: "Date Of joining", field:"dateOfJoining", sortable:true, filter: true},
    { headerName: "Email Id", field:"employeeEmailId", sortable:true, filter: true},
    { headerName: "Delete/Update/View",
    cellRenderer: 'btnCellRenderer',
    cellRendererParams: {
      clicked: function(field: any) {
        alert(`${field} was clicked`);
      }
    },
    minWidth: 150,}
    
  ];

  frameworkComponents = {
    btnCellRenderer: BtnCellRenderer
  };
  rowData: any;


  constructor(private employeeService:EmployeeService) { }
  onGridReady(params: GridReadyEvent){
    this.employeeService.viewAllEmployee().subscribe({
      next: employees=>{
          // setup the fake server with entire dataset
          var fakeServer = createFakeServer(employees);
          // create datasource with a reference to the fake server
          var datasource = createServerSideDatasource(fakeServer);
          // register the datasource with the grid
          params.api!.setServerSideDatasource(datasource);
       
      },
      error:err => this.errMessage = err
    });
  }

  ngOnInit(): void {
   
  }
}

function createServerSideDatasource(server: any): IServerSideDatasource {
  return {
    getRows: (params) => {
      console.log(
        '[Datasource] - rows requested by grid: startRow = ' +
          params.request.startRow +
          ', endRow = ' +
          params.request.endRow
      );
      // get data for request from our fake server
      var response = server.getData(params.request);
      // simulating real server call with a 500ms delay
      setTimeout(function () {
        if (response.success) {
          // supply rows for requested block to grid
          params.success({
            rowData: response.rows,
            rowCount: response.lastRow,
          });
        } else {
          params.fail();
        }
      }, 1000);
    },
  };
}
function createFakeServer(allData: any[]) {
  return {
    getData: (request: IServerSideGetRowsRequest) => {
      // in this simplified fake server all rows are contained in an array
      var requestedRows = allData.slice(request.startRow, request.endRow);
      // here we are pretending we don't know the last row until we reach it!
      var lastRow = getLastRowIndex(request, requestedRows);
      
      return {
        success: true,
        rows: requestedRows,
        lastRow: lastRow,
      };
    },
  };
}
function getLastRowIndex(request: IServerSideGetRowsRequest, results: any[]) {
  if (!results) return undefined;
  var currentLastRow = (request.startRow || 0) + results.length;
  // if on or after the last block, work out the last row, otherwise return 'undefined'
  return currentLastRow < (request.endRow || 0) ? currentLastRow : undefined;
}
