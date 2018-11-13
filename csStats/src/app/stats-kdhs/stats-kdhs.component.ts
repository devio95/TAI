import { Component, OnInit } from '@angular/core';
import { PlayerToShowService } from '../player-to-show.service';

@Component({
  selector: 'app-stats-kdhs',
  templateUrl: './stats-kdhs.component.html',
  styleUrls: ['./stats-kdhs.component.css']
})
export class StatsKDHSComponent implements OnInit {

  constructor(private playerToShow: PlayerToShowService) { }

  ngOnInit() {
    console.log(this.playerToShow.getStats());
  }

}
