import { Component, OnInit } from '@angular/core';
import { Stats } from '../Stats';
import { Link } from '../Link';
import { ApiService } from '../api.service';
import { PlayerToShowService } from '../player-to-show.service';

import { Observable } from 'rxjs';
import { LinkService } from '../link.service';
import { CompareStatsService } from '../compare-stats.service';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private compareStats: CompareStatsService, private Link : LinkService, private api: ApiService,private playerToShow: PlayerToShowService) { }

  statsToShow: Stats[];
  statsAll: any;
  links: Object;
  stat: any;
  linkList: Link[];
  ngOnInit() {
    this.generateTable();
  }

  generateTable(){
    this.compareStats.GenerateStats2();
    this.statsToShow = this.compareStats.shownStats;
  }

  delete(selectedItem: Stats){
    console.log(selectedItem._id);
    this.api.deleteStat(selectedItem._id);
    this.compareStats.DeleteStat(selectedItem);
    this.generateTable();
    this.compareStats.GenerateStats();
  }

  refresh(){
    console.log("Refresh");
    this.generateTable();
  }

  selectStats(selectedItem: any){
    console.log(selectedItem);
    this.stat = this.playerToShow.getStatsFromJSON(selectedItem);

    async function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
    
  }

  onSelect() {
    if(this.stat != null)
    {
      console.log(this.stat);
      this.playerToShow.Stats = this.playerToShow.getStatsFromJSON(this.stat);
      console.log(this.playerToShow.Stats);
    }
    else
      console.log("NULL!");
  }
}
