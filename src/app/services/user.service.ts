import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authSubject = new Subject<boolean>();

  validateAuth(data:boolean) {
    //passing the data as the next observable
    this.authSubject.next(data);
  }
  constructor() { }
}
