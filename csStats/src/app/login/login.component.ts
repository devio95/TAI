import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { IsLoggedService } from '../is-logged.service';
import { LinkService } from '../link.service';
import { Link } from '../Link';
import { ApiService } from '../api.service';
import { CompareStatsService } from '../compare-stats.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private CompareStats: CompareStatsService, private api: ApiService, private Link : LinkService,private http: HttpClient, private router: Router, private IsLogged : IsLoggedService) { }

  ngOnInit() {
  }

  loginData = { username:'', password:'' };
  message = '';
  data: any;

  login() {
    this.http.post('/api/signin',this.loginData)
    .subscribe(resp => {
      this.data = resp;
      localStorage.setItem('jwtToken', this.data.token);
      this.IsLogged.LogUser();
      let id = resp['user']['_id'];
      this.Link.setIdAccount(id);
      let link: Link;
      link = new Link();
      this.router.navigate(['navigate']);
      this.CompareStats.GenerateStats();
    }, err => {
      this.message = err.error.msg;
    });

  }



}
