import { Component, OnInit } from '@angular/core';
import { PlayerToShowService } from '../player-to-show.service';

@Component({
  selector: 'app-stats-maps-weapons',
  templateUrl: './stats-maps-weapons.component.html',
  styleUrls: ['./stats-maps-weapons.component.css']
})
export class StatsMapsWeaponsComponent implements OnInit {

  maps: any;
  weapons: any[];

  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  showYAxisLabel = false;
  xAxisLabelMaps = 'Map name';
  yAxisLabel = 'Value';
  xAxisLabelWeapons = 'Weapon name';

  colorScheme = {
    domain: ['#26759E']
  };
  

  constructor(private playerToShow: PlayerToShowService) { }

  ngOnInit() {
    this.maps = this.playerToShow.getMapsStats();
    this.weapons = this.playerToShow.getWeaponsStats();
  }

  onSelect(event) {
    console.log(event);
  }

}
