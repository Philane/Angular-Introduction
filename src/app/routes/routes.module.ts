import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
exports:[RoutesRoutingModule]
})
export class RoutesModule { }
