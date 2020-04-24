import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
  @Input() amount:any
  @Input() description:any
  @Input() expenseAmount:any
  @Input() description2:any
  
  temp:any ='-';
  records:{desc:string, amount:number, exAmount:number}[] = [];
  incomeArr:number[] = [];
  expenseArr:number[] = [];
  uniqueArr:number[] = [];
  totalIncome:number;

  ngOnInit(){ 
  }

  ngOnChanges() {
    if(this.amount && this.description){
      this.records.push({desc:this.description, amount:this.amount, exAmount:this.temp});
      // console.log(this.records);
      this.amount='';
      this.description='';
    }
    else if(this.expenseAmount && this.description2 ){
      this.records.push({desc:this.description2, amount:this.temp, exAmount:this.expenseAmount});
      // console.log(this.records);
    }
    for(var i = 0; i < this.records.length; i++){
      //console.log(this.records[i].desc, this.records[i].amount, this.records[i].exAmount);
      this.incomeArr.push(this.records[i].amount);
    } 
    //console.log(this.incomeArr);
    for (var j = 0; j < this.incomeArr.length; j++) {
      if (this.uniqueArr.indexOf(this.incomeArr[j]) == -1) {
        this.uniqueArr.push(this.incomeArr[j]);
      } 
    }
    console.log(this.uniqueArr);
  }
}
