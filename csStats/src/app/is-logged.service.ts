import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  public IsLogged : boolean;

  IsLoggedChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.IsLogged = false;
   }

   LogUser()
   {
    this.IsLogged = !this.IsLogged;
    this.IsLoggedChange.next(this.IsLogged);
    console.log(this.IsLogged);
   }
}
