import { Component, Input } from '@angular/core';

@Component({
  selector: 'galeria',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent {
  @Input() titulo: string = 'Galeria 1';
  @Input() fotos: string[] = [];

  atual: number = 0;

  atualIndex() {
    return this.atual + 1;
  }

  totalFotos() {
    return this.fotos.length;
  }

  checkFirst(): boolean {
    if (this.atual == 0) {
      return true;
    }
    return false;
  }

  checkLast(): boolean {
    if (this.atual == 4) {
      return true;
    }
    return false;
  }

  proximo() {
    this.atual++;
  }
  anterior() {
    this.atual--;
  }
  ultimo() {
    this.atual = 4;
  }
  primeiro() {
    this.atual = 0;
  }
}
