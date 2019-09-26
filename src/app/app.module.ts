import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule,MatIconModule,MatButtonModule} from '@angular/material'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { CalendarModule } from './calendar/calendar.module';
import {CalendarComponent} from './calendar/calendar/calendar.component';
import { DragDropComponent } from './drag-drop/drag-drop/drag-drop.component';
import { TreeViewComponent } from './trees/tree-view/tree-view.component';

import {ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';

const routes:Routes=[
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'calendar',
    component: CalendarComponent

  },
  {
    path: 'contact',
    component: ContactComponent

  },
  {
    path: 'about',
    component: AboutComponent

  },
  {
    path: 'dragDrop',
    component: DragDropComponent

  }
  ,
  {
    path: 'tree',
    component: TreeViewComponent

  },
  
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CalendarComponent,
    DragDropComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    ScheduleModule,RecurrenceEditorModule,
    DragDropModule,BrowserAnimationsModule,
    RouterModule.forRoot(routes),MatTreeModule,MatIconModule,MatButtonModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
