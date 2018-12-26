import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataPassService {

  constructor() { }
  public item = new Subject<any>();
  setData(data:any){
     this.item.next(data);
  }
}
