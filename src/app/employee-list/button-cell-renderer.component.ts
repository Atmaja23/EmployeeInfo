import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ICellRendererAngularComp } from "ag-grid-angular";
import {  ICellRendererParams } from "ag-grid-community";
@Component({
    selector: 'btn-cell-renderer',
    template:`
    <button  
    (click)="btnClickedHandler()">View</button>`
})
export class BtnCellRenderer implements ICellRendererAngularComp{
    constructor(private router: Router){};
    private params: any;
    refresh(params: any): boolean {
        throw new Error("Method not implemented.");
    }
    agInit(params: any): void {
       this.params = params;
    }
    btnClickedHandler() {
        this.params.clicked(this.params.value);
        // this.router.navigate(['/viewEmployee', this.params.value]);
      }
   
    
}