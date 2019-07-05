import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Icliente} from '../../models/cliente.interface';
import {ConexionService} from '../../services/conexion.service';

@Component({
  selector: 'app-cliente-detalle',
  templateUrl: './cliente-detalle.component.html',
  styleUrls: ['./cliente-detalle.component.sass']
})
export class ClienteDetalleComponent implements OnInit {

   idUrl: string;
   public cliente: Icliente;


  constructor(private conexion: ConexionService,
              private db: AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router)
  {
     this.idUrl = this.route.snapshot.paramMap.get('id');  // Capturar valor de id de la url
     // this.idUrl = this.route.snapshot.params['id'];  // Capturar valor de id de la url
  }

  ngOnInit() {
     this.oneCliente(this.idUrl);
  }

   // :void porque no retorna ningun valor.
   oneCliente(idCliente: string): void {
      this.conexion.getOneCliente(idCliente).subscribe(cliente => {
         console.log(cliente);
         this.cliente = cliente;
      });
   }
}







