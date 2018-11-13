import { Component, OnInit } from '@angular/core';
import { PlayerToShowService } from '../player-to-show.service';
import { NickAndAvatarComponent } from '../nick-and-avatar/nick-and-avatar.component';

@Component({
  selector: 'app-graphs-container',
  templateUrl: './graphs-container.component.html',
  styleUrls: ['./graphs-container.component.css']
})
export class GraphsContainerComponent implements OnInit {

  constructor(private playerToShow: PlayerToShowService) { }

  ngOnInit() {
  }

}
