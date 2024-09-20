import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from './player';
import { BoardComponent } from './board/board.component';
import { PlayerDisplayComponent } from './player-display/player-display.component';
import { PlayersService } from './players.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent, PlayerDisplayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe-2';

  playersService: PlayersService = inject(PlayersService);
  players:  Player[] = [];

  constructor() {
    this.players = this.playersService.getPlayers();
  }
}
