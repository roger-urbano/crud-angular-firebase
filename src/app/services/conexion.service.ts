import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {Icliente} from '../models/cliente.interface';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

   private clienteCollection: AngularFirestoreCollection<Icliente>;  // Toda la coleccion de clientes.
   private clientes: Observable<Icliente[]>; // Almacenar los clientes
   private clienteDoc: AngularFirestoreDocument<Icliente>; // Variable tipo documento cliente.
   private cliente: Observable<Icliente>; // Variable para 1 cliente.
   id: string;

   constructor(private afs: AngularFirestore,
               private db: AngularFireDatabase,)
   {
      this.clienteCollection = afs.collection<Icliente>('clientes'); // Variable trae (firebase)coleccion. snapshotChanges() para traer con id.
      this.clientes = this.clienteCollection.snapshotChanges().pipe(
         map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Icliente;
            const id = a.payload.doc.id;
            return { id, ...data };
         }))
      );
   }


   // Seleccionar Solo un cliente.
   getOneCliente(idCliente: string) {
      this.clienteDoc = this.afs.doc<Icliente>(`clientes/${idCliente}`);
      return this.cliente = this.clienteDoc.snapshotChanges().pipe(map(action => {
         if (action.payload.exists === false) {
            return null;
         } else {
            const data = action.payload.data() as Icliente;
            data.id = action.payload.id;
            return data;
         }
      }));
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
