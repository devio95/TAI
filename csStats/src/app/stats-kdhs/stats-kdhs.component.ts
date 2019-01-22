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
    console.log(this.hs);
    console.log(this.kd);
  }
  view: any[] = [300, 200];
  hs: any;
  kd: any[];
// options
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = false;
showLabels = true;
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
