import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private dataSource:BehaviorSubject<any>=new BehaviorSubject<any>("");
  data:Observable<any>=this.dataSource.asObservable();
  constructor() { }
  sendData(data:any){
    this.dataSource.next(data)
  }
}
