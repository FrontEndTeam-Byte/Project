import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SendRecordsService } from '../shared/services/send-records.service';
import { FilterService } from '../shared/services/filter.service';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit {
  subscription: Subscription;
  constructor(private filters: FilterService, public receiveRecord: SendRecordsService) { }

  // variables for processing a transaction
  records:{ user:string, desc:string, income:number, expense:number, date:any}[] = [];
  incomes: number[] = [];
  expenses: number[] = [];
  totalIncome: number = 0.0;
  totalExpense:number = 0.0;
  savings: number = 0.0;
  draft:boolean = false;

  // variables for filtering
  filtered: any[] = [];
  test;
  users: string[] = [];

  ngOnInit(){ 
    /**
     * Subscribing to recieve record service and getting the transaction values
     */
    this.subscription = this.receiveRecord.getTransaction().subscribe(val => {
      if(val){
        this.records.push(val);
        this.incomes.push(val.income);
        this.expenses.push(val.expense);
        this.users.push(val.user);
      }else{
        this.records = [];
      } 
      //Calculating total income 
      this.totalIncome = this.incomes.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      //Calculating total expenses 
      this.totalExpense = this.expenses.reduce(function(a, b){
        return Number(a) + Number(b);
        }, 0);
      // Calculating total saving
      this.savings = this.totalIncome - this.totalExpense;
      // If saving is less than 0 showing warning message to the user
      if(this.savings < 0){
        this.draft = true;
      }else if(this.savings > 0){
        this.draft = false;
      }
      console.log(this.users);
      console.log(this.filtered);
    })

    this.subscription = this.filters.getFilteredValues().subscribe(val => {
      if(val){
        this.filtered.push(val);
        console.log(val); 
      }
    })
    for(var i=0; i<this.users.length; i++){
      for(var j=0; j<this.filtered.length; j++){
        this.test = this.users[i].includes(this.filtered[j]);
        if(this.test == true){
          console.log('Matching Users' + this.filtered[j]);
        }
      }
    }    
  }

  filterTable(){    
     //console.log(this.filtered);
  }
}