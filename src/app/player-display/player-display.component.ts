import { Component, inject, Input } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-display',
  standalone: true,
  imports: [],
  templateUrl: './player-display.component.html',
  styleUrl: './player-display.component.css'
})
export class PlayerDisplayComponent {
  @Input() player!: Player;
  // playersService: PlayersService = inject(PlayersService);
  // players:  Player[] = [];
  // player: Player = {};


  constructor() {
    // this.players = this.playersService.getPlayers();
  }

}
