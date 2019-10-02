import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  public myName;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    let name =this.route.snapshot.parent.paramMap.get('name');
    
    this.myName=name;

    
  }

}
