import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
// import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

import {Icliente} from '../models/cliente.interface';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

   private clienteCollection: AngularFirestoreCollection<Icliente>;
   private clientes: Observable<Icliente[]>;
   private clienteDoc: AngularFirestoreDocument<Icliente>; // Variable tipo documento para eliminar item

   constructor(private afs: AngularFirestore) {
      this.clienteCollection = afs.collection<Icliente>('clientes'); // Variable trae (firebase)coleccion. snapshotChanges() para traer con id.
      this.clientes = this.clienteCollection.snapshotChanges().pipe(
         map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Icliente;
            const id = a.payload.doc.id;
            return { id, ...data };
         }))
      );

   }

  getClientes() {
     return this.clientes;
  }

  addCliente(cliente: Icliente) {
      this.clienteCollection.add(cliente);
  }

   deleteCliente(cliente) {
      this.clienteDoc = this.afs.doc<Icliente>(`clientes/${cliente.id}`);
      this.clienteDoc.delete();
   }



}
