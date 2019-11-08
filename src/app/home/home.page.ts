import { Component } from '@angular/core';
import { CadastrarHoraCertaPage } from '../cadastrar-hora-certa/cadastrar-hora-certa.page';
import{NavController} from '@ionic/angular';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navController:NavController) {}
 
  cadastrarHoraCerta(){
   // alert("chegou");
   this.navController.navigateForward('/cadastrar-hora-certa');
   
  }
}



