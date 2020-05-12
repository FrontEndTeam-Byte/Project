import { Component, OnInit } from '@angular/core';
import { SendRecordsService } from '../shared/send-records.service';

@Component({
  selector: 'addincome',
  templateUrl: './addincome.component.html',
  styleUrls: ['./addincome.component.css']
})
export class AddincomeComponent implements OnInit {

  constructor(private sendRecord: SendRecordsService) { }
  
  ngOnInit(): void { }

  sendIncome(desc, amount){
    this.sendRecord.sendIncome([{incomeDescription:desc.value, incomeAmount: amount.value}]);
  }
} 
 