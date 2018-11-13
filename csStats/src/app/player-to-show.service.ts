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

  constructor() { }
}
