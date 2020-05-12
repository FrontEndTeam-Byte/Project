import { Component, OnInit } from '@angular/core';
import { SendRecordsService } from '../shared/send-records.service';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private sendRecord: SendRecordsService) { }
  
  ngOnInit(): void { }

  sendIncome(desc, amount){
    this.sendRecord.sendIncome([{incomeDescription:desc.value, incomeAmount: amount.value}]);
=======
 amnt:any;
 desp:any;
 desp2:any;
 exAmnt:any;
  
  ngOnInit(): void {
  }
  
  sendIncome(desc, amount){
    this.desp= desc.value;
    this.amnt = amount.value;
   
>>>>>>> 6d2a7bee7311a6c2561aab60a47f9a1c04c50751
  }
   sendExpense(desc2, expense){
    this.desp2= desc2.value;
    this.exAmnt=expense.value;
    console.log(this.desp2, this.exAmnt)
  } 
} 
 