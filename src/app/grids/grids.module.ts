import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid/grid.component';


import { AgGridModule } from 'ag-grid-angular';
import { HierarchyComponent } from './hierarchy/hierarchy.component';

@NgModule({
  declarations: [GridComponent, HierarchyComponent],
  imports: [
    CommonModule,
    
    AgGridModule.withComponents([])
  ],
  exports:[GridComponent,AgGridModule,HierarchyComponent]
})
export class GridsModule { }
