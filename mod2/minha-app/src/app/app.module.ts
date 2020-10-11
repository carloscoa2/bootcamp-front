import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MoviesComponent } from './movies/movies.component';
import { RatingComponent } from './rating/rating.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { RefreshComponent } from './refresh/refresh.component';
import { CounterComponent } from './counter/counter.component';
import { ConfigComponent } from './config/config.component';
import { TimerComponent } from './timer/timer.component';

import { CepPipe } from './cep.pipe';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { from } from 'rxjs';
import { CpfPipe } from './cpf.pipe';
import { JoinStringsPipe } from './join-strings.pipe';
registerLocaleData(localePt);

import { ReactiveFormsModule } from '@angular/forms';

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
    RefreshComponent,
    CounterComponent,
    ConfigComponent,
    TimerComponent,
    CepPipe,
    CpfPipe,
    JoinStringsPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
