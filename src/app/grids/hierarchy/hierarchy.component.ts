import { Component, OnInit } from '@angular/core';
import "ag-grid-enterprise";

@Component({
  selector: 'app-hierarchy',
  template: `
  <div style="margin-bottom: 5px;">
    <input type="text" id="filter-text-box" placeholder="Filter..." (input)="onFilterTextBoxChanged()" />
  </div>
  <div style="height: calc(100% - 25px);">
    <ag-grid-angular
      #agGrid
      style="width: 100%; height: 100%;"
      id="myGrid"
      class="ag-theme-balham"
      [columnDefs]="columnDefs"
      [rowData]="rowData"
      [treeData]="true"
      [animateRows]="true"
      [groupDefaultExpanded]="groupDefaultExpanded"
      [getDataPath]="getDataPath"
      [autoGroupColumnDef]="autoGroupColumnDef"
      (gridReady)="onGridReady($event)"
    ></ag-grid-angular>
  </div>
`
})
export class HierarchyComponent implements OnInit {
  public gridApi;
  public gridColumnApi;

  public columnDefs;
  public rowData;
  public groupDefaultExpanded;
  public getDataPath;
  public autoGroupColumnDef;

  constructor() { 
    this.columnDefs = [{ field: "jobTitle" }, { field: "employmentType" }];
    this.rowData = [
      {
        orgHierarchy: ["Erica Rogers"],
        jobTitle: "CEO",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
        jobTitle: "Exec. Vice President",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
        jobTitle: "Director of Operations",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson"],
        jobTitle: "Fleet Coordinator",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Leah Flowers"],
        jobTitle: "Parts Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Brittany Hanson", "Tammy Sutton"],
        jobTitle: "Service Technician",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker", "Derek Paul"],
        jobTitle: "Inventory Control",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland"],
        jobTitle: "VP Sales",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Morris Hanson"],
        jobTitle: "Sales Manager",
        employmentType: "Permanent"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Todd Tyler"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Bennie Wise"],
        jobTitle: "Sales Executive",
        employmentType: "Contract"
      },
      {
        orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Francis Strickland", "Joel Cooper"],
        jobTitle: "Sales Executive",
        employmentType: "Permanent"
      }
    ];
    this.groupDefaultExpanded = -1;
    this.getDataPath = function(data) {
      return data.orgHierarchy;
    };
    this.autoGroupColumnDef = {
      headerName: "Organisation Hierarchy",
      cellRendererParams: { suppressCount: true }
    };
  }

  ngOnInit() {
  }
  onFilterTextBoxChanged() {
    //this.gridApi.setQuickFilter(document.getElementById("filter-text-box").value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
  }

}
