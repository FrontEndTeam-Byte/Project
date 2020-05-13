import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendRecordsService {
  private subject = new Subject<any>();

  constructor() { }
  /**
   * To send income record
   * @param record - to send one record
   */
   sendIncome(record: {incomeDescription: string, incomeAmount: number}){
    this.subject.next(record);
    console.log(record);
  } 
 /*  sendIncome(test:any){
    this.subject.next(test);
    console.log(test);
  } */

  /**
   * To get income record
   */
  getIncome(): Observable<any>{
    return this.subject.asObservable();
  }
}
