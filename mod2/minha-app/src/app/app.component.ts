import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text = 'Uma mensagem aqui';
  n = 1234.788;
  hoje = new Date();
  meuCep = '30882770';
  meuCpf = '12345678911';
  strings: string[] = ['gato', 'cavalo'];

  addString(newString) {
    this.strings.push(newString);
  }
}
