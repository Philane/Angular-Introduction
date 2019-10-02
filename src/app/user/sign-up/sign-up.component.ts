import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public login;
  constructor(private router : Router) { }
  model ={
    email :'',
    password:''
  };

  ngOnInit() {
   
   
    
  }
  onSubmit(form:NgForm){
    //debugger;
    console.log(form.value.email)
    localStorage.setItem('login',form.value.email);
    this.router.navigateByUrl('/home');
  }

}
