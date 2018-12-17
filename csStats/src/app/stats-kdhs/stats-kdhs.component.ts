import { Component, OnInit } from '@angular/core';
import { PlayerToShowService } from '../player-to-show.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-stats-kdhs',
  templateUrl: './stats-kdhs.component.html',
  styleUrls: ['./stats-kdhs.component.css']
})
export class StatsKDHSComponent implements OnInit {

  
  constructor(private playerToShow: PlayerToShowService) { }

  ngOnInit() {
    this.hs = this.playerToShow.getHs();
  this.kd = this.playerToShow.getKD();
  }
  view: any[] = [500, 300];
  hs: any;
  kd: any[];
// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = false;
showYAxisLabel = false;
xAxisLabelMaps = 'Map name';
yAxisLabel = 'Value';
xAxisLabelWeapons = 'Weapon name';

colorScheme = {
  domain: ['#26759E','#a30707']
};
onSelect(event) {
  console.log(event);
}

}
