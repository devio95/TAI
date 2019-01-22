import { Injectable } from '@angular/core';
import { Link } from './Link';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  Link : Link;
  constructor() {
    this.Link = new Link();
   }

  setIdAccount(id)
  {
    this.Link.idAccount = id;
  }
  setIdStat(id)
  {
    this.Link.idStat = id;
  }
}
