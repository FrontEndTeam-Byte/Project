import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

 amnt:any;
 desp:any;
  
  ngOnInit(): void {
  }

  sendDetails(desc, amount){
    this.amnt = amount.value;
    this.desp= desc.value;
  }
} 

 