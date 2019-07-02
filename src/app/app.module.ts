import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Firebase
import { environment } from '../environments/environment';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Componentes
import { HeaderComponent } from './components/header/header.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AnalizarClienteComponent } from './components/clientes/analizar-cliente/analizar-cliente.component';

// Services
import {ConexionService} from './services/conexion.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    AnalizarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),

  ],
  providers: [
     ConexionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
