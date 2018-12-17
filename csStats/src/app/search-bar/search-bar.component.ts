import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service'; 
import { PlayerToShowService } from '../player-to-show.service';
import { Stats } from '../Stats';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})


export class SearchBarComponent implements OnInit {

  steamData: any;
  steamDataNick :any;
  steamId: string;
  urlData: string;
  urlNick: string;
  url: string;
  StatsToSave: Stats;
  addButton: boolean;

  getSucces: boolean;

  testMode: boolean;

  test : any;

  
  constructor(private http: HttpClient,private api: ApiService,private playerToShow: PlayerToShowService) { }

  ngOnInit() {
    this.StatsToSave = new Stats();
    this.url = '';
    this.urlData = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=556BE35571096BEB9B19D1EB2F2809AC&steamid=';
    this.urlNick = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=556BE35571096BEB9B19D1EB2F2809AC&steamids=';
    this.steamId = '76561197998575131';
    this.addButton = false;
    this.getSucces = false;
    this.testMode = false;
  }

  getDataFromSteam(){
    if (this.steamId != '') {
      this.url = '';
      this.url = this.urlData + this.steamId;
      this.api.getSteamData(this.url)
        .subscribe(data => {
          this.steamData = data;
          console.log(data);
        }
        );
      this.url= "";
      this.url= this.urlNick + this.steamId;
      this.api.getSteamData(this.url)
        .subscribe(data =>{ 
          this.steamDataNick = data;
        }
      );
    }
    this.addButton = true;
  }

  findObject(array: any,value : any){
    for (var i = 0; i< array.length; i++){
      if (array[i].name == value)
        return array[i];
    }
  }

  showStats(){
    this.StatsToSave.playerName = this.steamDataNick.response.players[0].personaname;
    this.StatsToSave.avatar = this.steamDataNick.response.players[0].avatarmedium;
    this.StatsToSave.ak47_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_ak47").value;
    this.StatsToSave.m4a4_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_m4a1").value;
    this.StatsToSave.awp_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_awp").value;
    this.StatsToSave.p90_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_p90").value;
    this.StatsToSave.aug_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_aug").value;
    this.StatsToSave.deagle_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_deagle").value;
    this.StatsToSave.glock_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_glock").value;
    this.StatsToSave.knife_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_knife").value;
    this.StatsToSave.famas_kills = this.findObject(this.steamData.playerstats.stats,"total_kills_famas").value;
 
    this.StatsToSave.inferno = this.findObject(this.steamData.playerstats.stats,"total_rounds_map_de_inferno").value;
    this.StatsToSave.nuke = this.findObject(this.steamData.playerstats.stats,"total_rounds_map_de_nuke").value;
    this.StatsToSave.dust2 = this.findObject(this.steamData.playerstats.stats,"total_rounds_map_de_dust2").value;
    this.StatsToSave.train = this.findObject(this.steamData.playerstats.stats,"total_rounds_map_de_train").value;
    this.StatsToSave.cbble = this.findObject(this.steamData.playerstats.stats,"total_rounds_map_de_cbble").value;
    this.StatsToSave.hs = this.findObject(this.steamData.playerstats.stats,"total_kills_headshot").value;
    this.StatsToSave.kills = this.findObject(this.steamData.playerstats.stats,"total_kills").value;
    this.StatsToSave.deaths = this.findObject(this.steamData.playerstats.stats,"total_deaths").value;
    this.StatsToSave.wins = this.findObject(this.steamData.playerstats.stats,"total_wins").value;
    // Saving stats to Service
    this.playerToShow.Stats = this.StatsToSave;
  }

  add(){
    this.showStats();
    console.log(this.playerToShow.Stats);
    this.api.saveStats(this.playerToShow.Stats);
   }

   show(){
    this.api.getAll().subscribe((data) => {
      this.test = data;
      console.log(data);
    })
   }

   delete(){
    for(let item of this.test){
      this.api.deleteStat(item._id);
    }
  }
}
