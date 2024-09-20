import { Component, inject, Input } from '@angular/core';
import { PlayersService } from '../players.service';
import { Player } from '../player';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-player-display',
  standalone: true,
  imports: [NgFor],
  templateUrl: './player-display.component.html',
  styleUrl: './player-display.component.css'
})
export class PlayerDisplayComponent {
  @Input() player!: Player;

}
