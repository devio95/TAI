import { Injectable } from '@angular/core';
import { Stats } from 'src/app/Stats';

@Injectable({
  providedIn: 'root'
})
export class PlayerToShowService {

  Stats: Stats;
  Id: any;

  getPlayerName(){
    return this.Stats.playerName;
  }

  getPlayerAvatar(){
    return this.Stats.avatar;
  }

  getStats()
  {
    return this.Stats;
  }

  getStatsFromJSON(data){
    var stat = new Stats();
    stat.avatar = data.avatar;
    stat.playerName = data.playerName;
    stat.ak47_kills = data.ak47_kills;
    stat.m4a4_kills = data.m4a4_kills;
    stat.awp_kills = data.awp_kills;
    stat.p90_kills = data.p90_kills;
    stat.aug_kills = data.aug_kills;
    stat.deagle_kills = data.deagle_kills;
    stat.glock_kills = data.glock_kills;
    stat.knife_kills = data.knife_kills;
    stat.famas_kills = data.famas_kills;
    stat.inferno = data.inferno;
    stat.nuke = data.nuke;
    stat.dust2 = data.dust2;
    stat.train = data.train;
    stat.cbble = data.cbble;

    return stat;
  }

  getMapsStats()
  {
    var stats = [
      {
        "name": "de_inferno",
        "value": this.Stats.inferno
      },
      {
        "name": "de_nuke",
        "value": this.Stats.nuke
      },
      {
        "name": "de_dust2",
        "value": this.Stats.dust2
      },
      {
        "name": "de_train",
        "value": this.Stats.train
      },
      {
        "name": "de_cobblestone",
        "value": this.Stats.cbble
      }
    ];
      return stats;
  }

  getKD()
  {
    var stats = [
      {
        "name": "kills",
        "value": this.Stats.kills
      },
      {
        "name": "deaths",
        "value": this.Stats.deaths
      }
    ];
      return stats;
  }

  getHs()
  {
    var stats = [
      {
        "name": "Headshots",
        "value": this.Stats.hs
      },
      {
        "name": "Total Kills",
        "value" : this.Stats.kills
      }
    ];
      return stats;
  }

  getWins()
  {
    var stats = [
      {
        "name": "wins",
        "value": this.Stats.wins
      }
    ];
      return stats;
  }

  getWeaponsStats()
  {
    var stats = [
      {
        "name": "AK-47",
        "value": this.Stats.ak47_kills
      },
      {
        "name": "M4A4",
        "value": this.Stats.m4a4_kills
      },
      {
        "name": "AWP",
        "value": this.Stats.awp_kills
      },
      {
        "name": "P90",
        "value": this.Stats.p90_kills
      },
      {
        "name": "AUG",
        "value": this.Stats.aug_kills
      },
      {
        "name": "DEAGLE",
        "value": this.Stats.deagle_kills
      },
      {
        "name": "GLOCK",
        "value": this.Stats.glock_kills
      },
      {
        "name": "KNIFE",
        "value": this.Stats.knife_kills
      },
      {
        "name": "FAMAS",
        "value": this.Stats.famas_kills
      },

    ];
      return stats;
  }

  constructor() { }
}
