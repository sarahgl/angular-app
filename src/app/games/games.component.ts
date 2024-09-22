import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
    <h3>Los juegos de {{ username }} son:</h3>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
    <p class="favorito">Haz click en tu juego favorito</p>
  `,
  styles: `
    .favorito {
      font-size: 15px;
      margin-bottom: 26px;
    }
    `,
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Tomb Raider',
    },
    {
      id: 2,
      name: 'The Last of Us',
    },
    {
      id: 3,
      name: 'Animal Crossing',
    },
  ];
}
