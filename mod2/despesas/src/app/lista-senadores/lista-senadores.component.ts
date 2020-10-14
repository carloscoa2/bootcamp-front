import { Component, OnInit } from '@angular/core';
import { Senador, SenadoresService } from '../senadores.service';

@Component({
  selector: 'lista-senadores',
  templateUrl: './lista-senadores.component.html',
  styleUrls: ['./lista-senadores.component.css'],
})
export class ListaSenadoresComponent implements OnInit {
  senadores: Senador[] = [];
  constructor(private senadoresService: SenadoresService) {}

  ngOnInit(): void {
    this.senadoresService.listarSenadores().subscribe((senadores) => {
      this.senadores = senadores;
    });
  }
}
