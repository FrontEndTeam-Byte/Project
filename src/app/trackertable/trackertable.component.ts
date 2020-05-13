import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SendRecordsService } from '../shared/send-records.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'trackertable',
  templateUrl: './trackertable.component.html',
  styleUrls: ['./trackertable.component.css']
})
export class TrackertableComponent implements OnInit, OnChanges {
  
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

 