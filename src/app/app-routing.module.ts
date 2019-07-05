import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './components/clientes/clientes.component';
import {AnalizarClienteComponent} from './components/clientes/analizar-cliente/analizar-cliente.component';
import {ClienteDetalleComponent} from './components/cliente-detalle/cliente-detalle.component';

const routes: Routes = [
   { path: '', component: ClientesComponent, pathMatch: 'full' },
   { path: 'clientes', component: ClientesComponent },
   { path: 'clientes/cliente-detalle/:id', component: ClienteDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
