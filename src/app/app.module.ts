import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes,CanActivate} from '@angular/router'
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule,MatIconModule,MatButtonModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
//import { CalendarModule } from './calendar/calendar.module';
import {CalendarComponent} from './calendar/calendar/calendar.component';
import { DragDropComponent } from './drag-drop/drag-drop/drag-drop.component';
import { TreeViewComponent } from './trees/tree-view/tree-view.component';
import { ChartsComponent } from './charts/charts/charts.component';
import { LoginComponent } from './user/login/login.component';
import { AccountComponent } from './user/account/account.component';
import {NotificationsComponent} from './user/notifications/notifications.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import {AuthGuard} from './auth.guard';
import {RoutesRoutingModule} from './routes/routes-routing.module'

import {ScheduleModule,RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { DeleteComponent } from './user/delete/delete.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RedblackDirective } from './directives/redblack.directive';
import { GridComponent } from './grids/grid/grid.component';
import { AgGridModule } from 'ag-grid-angular';






const routes:Routes=[
  {
    path: 'home',
    component: HomeComponent
 
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]

  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'teacher',
    component:  TeacherComponent

  },
  {
    path: 'about',
    component: AboutComponent

  },
  {
    path: 'dragDrop',
    component: DragDropComponent

  },{
    path: 'charts',
    component: ChartsComponent

  },
  {
    path: 'login',component: LoginComponent,
    children:    [
      { path: 'teacher', component: TeacherComponent },
    { path: 'account/:name/:id', component: AccountComponent,children:[{path: 'delete', component: DeleteComponent}] },
    { path: 'notifications', component: NotificationsComponent }
    
  ]
  }
  ,
  {
    path: 'tree',
    component: TreeViewComponent

  },
  {
    path: 'signup',
    component: SignUpComponent

  }
  ,
  {
    path: 'grid',
    component: GridComponent

  }

  ,
  
  
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
    ChartsComponent,
    TreeViewComponent,
    LoginComponent,
    AccountComponent,
    NotificationsComponent,
    DeleteComponent,
    SignUpComponent,
    TeacherComponent,
    StudentComponent,
    ParentComponent,
    ChildComponent,
    RedblackDirective,
    GridComponent
   
  ],
  imports: [
    BrowserModule,
    ScheduleModule,RecurrenceEditorModule,
    DragDropModule,BrowserAnimationsModule,RoutesRoutingModule,FormsModule,AgGridModule,
    RouterModule.forRoot(routes),MatTreeModule,MatIconModule,MatButtonModule
  ],
  providers: [DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
