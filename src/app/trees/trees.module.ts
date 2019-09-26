import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TreeFlatOverviewExampleComponent } from './tree-flat-overview-example/tree-flat-overview-example.component';

@NgModule({
  declarations: [TreeViewComponent, TreeFlatOverviewExampleComponent],
  imports: [
    CommonModule
  ],
  exports:[TreeViewComponent]
})
export class TreesModule { }
