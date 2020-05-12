import { Component, Input, OnInit, OnChanges } from '@angular/core';
<<<<<<< HEAD
import { SendRecordsService } from '../shared/send-records.service';
import { Subscription } from 'rxjs';
=======
>>>>>>> 6d2a7bee7311a6c2561aab60a47f9a1c04c50751

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
<<<<<<< HEAD
  
  records:{desc:string, amount:number}[] = [];
  subscription: Subscription;

  constructor(public receiveRecord: SendRecordsService){
    this.subscription = this.receiveRecord.getIncome().subscribe(val => {
      if(val){
        this.records.push(val);
      }else{
        this.records = [];
      }
    })
  }

  ngOnInit(){ }
  ngOnChanges() { }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
=======

  @Input() amount:any
  @Input() description:any
  @Input() expenseAmount:any
  @Input() description2:any

  draft:boolean;
  yippee:boolean;

  incomeArr:any[] = [];
  uniqueIncomeArr:any[] =[];

  expenseArr:any[] = [];
  uniqueExpenseArr:any[] =[];

  totalIncome:any;
  totalExpense:any;

  totalSaving:any;
  
  temp = 0.00;
  records:{desc:string, amount:number, exAmount:number}[] = [];

  ngOnInit(){ }

  ngOnChanges() {
    // Checking for the description, income and expense and pushing the values in to the table
    if(this.amount && this.description){
      this.records.push({desc:this.description, amount:this.amount, exAmount:this.temp});
      console.log(this.records);
      this.amount='';
      this.description='';
    }
    else if(this.expenseAmount && this.description2 ){
      this.records.push({desc:this.description2, amount:this.temp, exAmount:this.expenseAmount});
      console.log(this.records);
    }
    //Pushing income values to income array
    for(var i = 0; i < this.records.length; i++){
      this.incomeArr.push(this.records[i].amount);
    } 
    //console.log(this.incomeArr);
    // Removing Dulpicate Incomes 
    for (var j = 0; j < this.incomeArr.length; j++) {
      if (this.uniqueIncomeArr.indexOf(this.incomeArr[j]) == -1) {
        this.uniqueIncomeArr.push(this.incomeArr[j]);
      } 
    }
    //console.log(this.uniqueIncomeArr);
    //Adding Unique Incomes
    this.totalIncome = this.uniqueIncomeArr. reduce(function(a, b){
      return a + b;
      }, 0);
      console.log(this.totalIncome);

    //Pushing expense values to expense array
    for(var e = 0; e < this.records.length; e++){
      this.expenseArr.push(this.records[e].exAmount);
    } 
    //console.log(this.expenseArr);    
    // Removing Dulpicate Expenses 
    for (var k = 0; k < this.expenseArr.length; k++) {
      if (this.uniqueExpenseArr.indexOf(this.expenseArr[k]) == -1) {
        this.uniqueExpenseArr.push(this.expenseArr[k]);
      } 
    }
    //console.log(this.uniqueExpenseArr);    
    //Adding Unique Expenses
    this.totalExpense = this.uniqueExpenseArr. reduce(function(c, d){
      return c + d;
      }, 0);
    console.log(this.totalExpense); 

    console.log(this.totalIncome - this.totalExpense);

    this.totalSaving = this.totalIncome - this.totalExpense;

    if((this.totalIncome - this.totalExpense) < 0){
      this.draft = true;
    }
    /* else if((this.totalIncome - this.totalExpense) > 0 && (this.totalIncome - this.totalExpense) != 0){
      this.yippee = true;
    } */
  }
}
 
>>>>>>> 6d2a7bee7311a6c2561aab60a47f9a1c04c50751
