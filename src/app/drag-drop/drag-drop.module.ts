import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [DragDropComponent],
  imports: [
    CommonModule
  ],
  exports:[DragDropComponent]
})
export class DragDropModule { }
