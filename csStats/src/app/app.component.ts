import { Component } from '@angular/core';
import { IsLoggedService } from './is-logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Logged : boolean;
  _subscription : any;
  constructor(private IsLogged : IsLoggedService){
    this.Logged = !IsLogged.IsLogged;
    this._subscription = IsLogged.IsLoggedChange.subscribe((value) => {
      this.Logged = !value;
    });
  }

  title = 'app';
}
