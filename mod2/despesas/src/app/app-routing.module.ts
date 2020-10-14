import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSenadoresComponent } from './lista-senadores/lista-senadores.component';
import { DespesasSenadoresComponent } from './despesas-senadores/despesas-senadores.component';

const routes: Routes = [
  { path: 'senadores', component: ListaSenadoresComponent },
  { path: 'senadores/:id', component: DespesasSenadoresComponent },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
