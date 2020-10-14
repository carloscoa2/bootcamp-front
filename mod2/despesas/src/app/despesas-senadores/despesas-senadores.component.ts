import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DespesasSenador, SenadoresService } from '../senadores.service';

@Component({
  selector: 'despesas-senadores',
  templateUrl: './despesas-senadores.component.html',
  styleUrls: ['./despesas-senadores.component.css'],
})
export class DespesasSenadoresComponent implements OnInit {
  despesasSenador: DespesasSenador;
  id: number;

  despesaA: number = 0;
  despesaB: number = 0;
  despesaC: number = 0;
  despesaD: number = 0;
  despesaE: number = 0;
  despesaF: number = 0;
  despesaG: number = 0;
  despesaTotal: number = 0;

  constructor(
    private senadoresService: SenadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.senadoresService.getDespesasSenador(1).subscribe((despesasSenador) => {
    //   this.despesasSenador = despesasSenador;
    // });
    this.route.paramMap.subscribe((paramMap) => {
      this.id = parseInt(paramMap.get('id'));
      this.senadoresService
        .getDespesasSenador(this.id)
        .subscribe((despesasSenador) => {
          this.despesasSenador = despesasSenador;
        });
    });

    this.despesasSenador.despesas.forEach((despesa) => {
      const tipo = despesa.tipo;
      if (tipo == 1) {
        this.despesaA += despesa.valor;
      }
      if (tipo == 2) {
        this.despesaB += despesa.valor;
      }
      if (tipo == 3) {
        this.despesaC += despesa.valor;
      }
      if (tipo == 4) {
        this.despesaD += despesa.valor;
      }
      if (tipo == 5) {
        this.despesaE += despesa.valor;
      }
      if (tipo == 6) {
        this.despesaF += despesa.valor;
      }
      if (tipo == 7) {
        this.despesaG += despesa.valor;
      }
      this.despesaTotal += despesa.valor;
    });
  }

  getDespesaA() {
    this.despesasSenador.despesas.forEach((despesa) => {
      const tipo = despesa.tipo;
      if (tipo == 1) {
        this.despesaA += despesa.valor;
      }
      if (tipo == 2) {
        this.despesaB += despesa.valor;
      }
      if (tipo == 3) {
        this.despesaC += despesa.valor;
      }
      if (tipo == 4) {
        this.despesaD += despesa.valor;
      }
      if (tipo == 5) {
        this.despesaE += despesa.valor;
      }
      if (tipo == 6) {
        this.despesaF += despesa.valor;
      }
      if (tipo == 7) {
        this.despesaG += despesa.valor;
      }
      this.despesaTotal += despesa.valor;
    });
  }
}
