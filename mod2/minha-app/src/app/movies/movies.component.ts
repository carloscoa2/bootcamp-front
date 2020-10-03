import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  // teste: string = 'teste';
  movies = [
    { title: 'Os Vingadores', rating: 5 },
    { title: 'Joias Brutas', rating: 3 },
    { title: 'Parasita', rating: 5 },
    { title: 'O Irlandês', rating: 4 },
    { title: 'Pantera Negra', rating: 4 },
  ];
}
