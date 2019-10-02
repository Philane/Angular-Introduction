import { Component,Input, OnInit } from '@angular/core';
import { Teacher } from '../shared/teacher.model';
 
@Component({
 selector: 'app-student',
 templateUrl: './student.component.html',
 styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
 
 @Input() teacher: Teacher;
 @Input('principle') principleName: string;
 
 constructor() { }
 
 ngOnInit() {
 }
 
}