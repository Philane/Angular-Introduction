import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid/grid.component';


import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule,
    
    AgGridModule.withComponents([])
  ],
  exports:[GridComponent,AgGridModule]
})
export class GridsModule { }
