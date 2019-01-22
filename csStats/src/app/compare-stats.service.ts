import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Link } from './Link';
import { Stats } from './Stats';
import { PlayerToShowService } from './player-to-show.service';
import { LinkService } from './link.service';
import { validateConfig } from '@angular/router/src/config';

@Injectable({
  providedIn: 'root'
})
export class CompareStatsService {

  linkList: Link[];
  statsList: Stats[];
  shownStats: Stats[];
  constructor(private LinkService: LinkService, private api: ApiService,private playerToShow : PlayerToShowService) {
    this.linkList = new Array();
    this.statsList = new Array();
    this.shownStats = new Array();
   }

  DeleteStat(stat : Stats){
    this.shownStats = this.shownStats.filter(x => x!== stat);
  }
  
  GenerateStats()
  {
    this.statsList = new Array();
    this.linkList = new Array();
    let link: Link;
    link = new Link();
    this.api.getAllLinks().subscribe((data) => {
      data.forEach(item => {
        if(item.idAccount == this.LinkService.Link.idAccount)
        {
          link.idAccount = item['idAccount'];
          link.idStat = item['idStat'];
          this.linkList.push(link);
        }
        console.log(this.linkList);
      });
    })
    let stats: Stats;
    stats = new Stats();
    this.api.getAll().subscribe((data) => {
      data.forEach(item => {
        stats = item;
        this.statsList.push(stats);
      });
    })
  }

  GenerateStats2()
  {
    this.shownStats = new Array();
    let id : String;
    id = this.LinkService.Link.idAccount;
    console.log(this.statsList);
    for(let item in this.statsList)
    {
      if(this.statsList[item].idAccount == id)
        {
          this.shownStats.push(this.statsList[item]);
        }
    }
    console.log(this.shownStats);
  }
}
