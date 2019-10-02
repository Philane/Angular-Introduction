import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import { Input } from '@syncfusion/ej2-inputs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
public myName;


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let name =this.route.snapshot.paramMap.get('name');
    this.myName=name; 
    



  }
}
