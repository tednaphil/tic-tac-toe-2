import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playersList: Player[] = [
    {
      id: 'One',
      token: '🐝',
      isTurn: true,
      startGame: true,
      moves: [],
      wins: 0
    },
    {
    id: 'Two',
    token: '🐻',
    isTurn: false,
    startGame: false,
    moves: [],
    wins: 0
    }
  ];

  getPlayers(): Player[] {
    return this.playersList;
  }

  getPlayerById(id: string): Player | undefined {
    return this.playersList.find(player => player.id === id);
  }
  
  constructor() {

  }
}
