import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './components/clientes/clientes.component';
import {AnalizarClienteComponent} from './components/clientes/analizar-cliente/analizar-cliente.component';

const routes: Routes = [
   { path: '', component: ClientesComponent, pathMatch: 'full' },
   { path: 'clientes', component: ClientesComponent },
   { path: 'clientes/analizar-cliente/:id', component: AnalizarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
