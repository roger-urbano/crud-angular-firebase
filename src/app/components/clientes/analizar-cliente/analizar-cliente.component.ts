import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Icliente} from '../../../models/cliente.interface';


@Component({
  selector: 'app-analizar-cliente',
  templateUrl: './analizar-cliente.component.html',
  styleUrls: ['./analizar-cliente.component.sass']
})
export class AnalizarClienteComponent implements OnInit {

   @Input() cliente: any;
   clientes: Icliente[];
   idUrl: string;


  constructor() {
     // this.idUrl = this.route.snapshot.paramMap.get('id');  // obtener valor de id de la url
  }

  ngOnInit() {

  }



}
