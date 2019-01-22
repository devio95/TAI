import { Injectable, ViewChild } from '@angular/core';
import { Observable, of, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PlayerToShowService } from './player-to-show.service';
import { Response, Http } from "@angular/http"
import 'rxjs/add/operator/catch';
import { LinkService } from './link.service';
import { NgAnalyzedFile } from '@angular/compiler';
import { Link } from './Link';
import 'rxjs/add/operator/map';
import { Stats } from './Stats';
import { CompareComponent } from './compare/compare.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private Link : LinkService, private http: HttpClient, private playerToShow: PlayerToShowService) { }

  private subject = new Subject<any>();
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  

  getSteamData(url: string){
     return this.http.get(url)
     .pipe(
     catchError(this.handleError)
     );

     

  }

  getAll(): Observable<Stats[]>{
    return this.http.get<Stats[]>('/main');
  }

  deleteStat(id){
    this.http.delete('/main/'+id)
    .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
    );
  }

  getAllLinks(): Observable<Link[]>{
    return this.http.get<Link[]>('/main/linkGetAll');
  }

  saveStats(statsToAdd)
  {
    console.log(statsToAdd);
    this.http.post('/main', statsToAdd)
    .subscribe(res => {
        let id = res['_id'];
        console.log(res);
        this.Link.setIdStat(id);
        this.saveLink(this.Link.Link);
      }, (err) => {
        console.log(err);
      }
    );
  }

  saveLink(linkToAdd)
  {
    console.log(linkToAdd);
    this.http.post('/main/linkSave', linkToAdd)
    .subscribe(res => {
      let id = res['_id'];
    }, (err) => {
      console.log(err);
    }
  );
  }


}
