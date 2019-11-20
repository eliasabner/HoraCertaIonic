import { Component } from '@angular/core';
import { CadastrarHoraCertaPage } from '../cadastrar-hora-certa/cadastrar-hora-certa.page';
import{NavController} from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';

import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaHoraCerta = [];

  constructor(private navController:NavController, private storage:Storage) {}
 
  ionViewWillEnter(){
      //limmpa o historico do storage
      //this.storage.clear();
      this.storage.get('listaHoraCerta').then((value:any) =>{
      this.listaHoraCerta = JSON.parse(value);

    });
  }
  cadastrarHoraCerta(){
   // alert("chegou");
   this.navController.navigateForward('/cadastrar-hora-certa');
   
  }
}



