import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

 amnt:any;
 desp:any;
 desp2:any;
 exAmnt:any;
  
  ngOnInit(): void {
  }
  
  sendIncome(desc, amount){
    this.desp= desc.value;
    this.amnt = amount.value;
   
  }
   sendExpense(desc2, expense){
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    console.log(this.desp2, this.exAmnt)
  } 
} 
 