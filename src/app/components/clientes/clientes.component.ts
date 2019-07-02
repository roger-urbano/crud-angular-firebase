import {Component, OnInit, ViewChild} from '@angular/core';
import {ConexionService} from '../../services/conexion.service';
import {Icliente} from '../../models/cliente.interface';
import {Observable} from 'rxjs';
import {NavigationEnd, Route, Router, RouterEvent} from '@angular/router';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.sass']
})
export class ClientesComponent implements OnInit {

   @ViewChild('clienteForm') clienteForm: NgForm;
   clientes: Icliente[];
   cliente: any = {
      nombre: '',
      apellido: '',
      edad: '',
      fecha_n: ''
   };
   public clienteSelected: any;
   cantAnios: number;
   promedioAnios: number;


  constructor(private conexion: ConexionService, private router: Router,) {
     this.clientes = [];
  }

  ngOnInit() {
    // Asigna este path cuando componente esta cargado (pagina)
    //  this.router.navigateByUrl('/clientes');
     this.conexion.getClientes().subscribe((cliente) => {
        this.clientes = cliente;
     });
  }

  selectedCliente(index) {
     this.clienteSelected = this.clientes[index];
  }

  agregarCliente() {
     this.conexion.addCliente(this.cliente);
  }

  resetForm() {
     this.clienteForm.reset();
  }

   eliminar(cliente) {
      this.conexion.deleteCliente(cliente);
   }

   totalPromedio(data) {
      let total = 0;
      let promedio = 0;

      data.forEach((d) => {
         total += parseInt(d.edad, 10);
         promedio = total / data.length;
      });

      this.cantAnios = promedio;
      return Math.round(this.cantAnios);
   }

   desviacionEstandar(data) {
      let total = 0;
      let promedio = 0;
      let distancia = 0;
      let totalDistancia = 0;
      let obtenerDesviacion = 0;
      let desviacionStandar = 0;

      data.forEach((d) => {
         total += parseInt(d.edad, 10);
         promedio = total / data.length;
         distancia = (d.edad - promedio) ** 2;
         totalDistancia += distancia;
         obtenerDesviacion = totalDistancia / data.length;
         desviacionStandar = Math.sqrt(obtenerDesviacion);

      });
      return Math.round(desviacionStandar);
   }








}
