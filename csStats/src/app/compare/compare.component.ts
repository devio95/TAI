import { Component, OnInit } from '@angular/core';
import { Stats } from '../Stats';
import { ApiService } from '../api.service';
import { PlayerToShowService } from '../player-to-show.service';

import { Observable } from 'rxjs';



@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  constructor(private api: ApiService,private playerToShow: PlayerToShowService) { }

  statsToShow: any;
  stat: any;
  ngOnInit() {
    this.generateTable();
  }

  generateTable(){
    this.api.getAll().subscribe((data) => {
      this.statsToShow = data;
    })
  }

  delete(selectedItem: any){
    console.log(selectedItem._id);
    this.api.deleteStat(selectedItem._id);
    this.generateTable();
  }

  selectStats(selectedItem: any){
    this.stat = selectedItem;
    console.log(this.stat);
  }

  onSelect() {
    if(this.stat != null)
      this.playerToShow.Stats = this.playerToShow.getStatsFromJSON(this.stat);
    else
      console.log("NULL!");
  }
}
