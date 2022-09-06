import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {


  private _msg =new Subject<string>();
  msg$=this._msg.asObservable();
  constructor() { }
  sendMsg(message:string){
this._msg.next(message);
  }
}
