import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MoviesComponent } from './movies/movies.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    TodoListComponent,
    MoviesComponent,
    RatingComponent,
    PanelComponent,
    C1Component,
    C2Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
