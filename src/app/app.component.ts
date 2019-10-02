import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public login;
  ngOnInit() {
    //debugger; 
      this.login=localStorage.getItem('login');
  }
  
  title = 'Angular Philane';

  logOut(){
    localStorage.removeItem('login');
  }
 
  
}
