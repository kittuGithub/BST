import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject({});
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
      console.log('ChangeMessage : ' + message);
    this.messageSource.next(message);
  }

}
