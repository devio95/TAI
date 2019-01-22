import { Component, OnInit } from '@angular/core';
import { IsLoggedService } from '../is-logged.service';
import { PlayerToShowService } from '../player-to-show.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Link } from 'src/app/Link';
import { LinkService } from '../link.service';
import { CompareStatsService } from '../compare-stats.service';



@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  Logged : boolean;

 _subscription : any;

  constructor(private CompareStats : CompareStatsService,private Link : LinkService, private router: Router, private IsLogged : IsLoggedService, private playerToShow : PlayerToShowService,private api: ApiService) {
    this.Logged = IsLogged.IsLogged;
    this._subscription = IsLogged.IsLoggedChange.subscribe((value) => {
      this.Logged = value;
    });
    
   }

   add(){
    console.log(this.playerToShow.Stats);
    if(this.playerToShow.Stats != null)
    {
      this.api.saveStats(this.playerToShow.Stats);
      this.CompareStats.GenerateStats();
      this.router.navigateByUrl("/navigate/graphs/statsMapsWeapons" );
    }
   }

   playerStats(){
    if(this.playerToShow.Stats != null)
    {
      this.router.navigateByUrl("/navigate/graphs/statsMapsWeapons");
    }
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    //prevent memory leak when component destroyed
     this._subscription.unsubscribe();
   }

}
