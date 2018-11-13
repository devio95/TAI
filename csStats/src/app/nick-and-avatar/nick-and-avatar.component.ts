import { Component, OnInit } from '@angular/core';
import { PlayerToShowService } from '../player-to-show.service';

@Component({
  selector: 'app-nick-and-avatar',
  templateUrl: './nick-and-avatar.component.html',
  styleUrls: ['./nick-and-avatar.component.css']
})
export class NickAndAvatarComponent implements OnInit {

  nickName: String;
  avatar: String;

  constructor(private playerToShow: PlayerToShowService) { }

  ngOnInit() {
    this.nickName = this.playerToShow.Stats.playerName;
    this.avatar = this.playerToShow.Stats.avatar;
  }

}
