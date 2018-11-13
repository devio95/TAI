import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { PlayerToShowService } from './player-to-show.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private playerToShow: PlayerToShowService) { }

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
    return this.http.get(url);
  }

  getAll(){
    return this.http.get('/main');
  }

  deleteStat(id){
    this.http.delete('/main/'+id)
    .subscribe(res => {
      }, (err) => {
        console.log(err);
      }
    );
  }

  saveStats(statsToAdd)
  {
    this.http.post('/main', statsToAdd)
    .subscribe(res => {
        let id = res['_id'];
      }, (err) => {
        console.log(err);
      }
    );
  }


}
