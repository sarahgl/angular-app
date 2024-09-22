import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de algo</h3>
    <img
      src="https://images.pexels.com/photos/6785044/pexels-photo-6785044.jpeg"
    />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima adipisci
      nam modi, officiis omnis harum neque similique in consequuntur consectetur
      quisquam a praesentium dolor exercitationem rerum voluptatibus quam quae
      officia.
    </p>
  `,
  styles: `
  img {
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}
