import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public customer ={"id":1,"name":"Philane"};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  /*onSelect(customer){
    this.router.navigate(['/account',customer.name,customer.id])
  }*/

}
