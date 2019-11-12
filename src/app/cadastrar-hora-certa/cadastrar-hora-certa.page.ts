import { Component, OnInit } from '@angular/core';

import{FormGroup, FormControl, Validators} from '@angular/forms';

import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-cadastrar-hora-certa',
  templateUrl: './cadastrar-hora-certa.page.html',
  styleUrls: ['./cadastrar-hora-certa.page.scss'],
})
export class CadastrarHoraCertaPage implements OnInit {
  formCadastrarHoraCerta = new FormGroup({
    data: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    falarTexto: new FormControl('',Validators.required),
    cor: new FormControl('',Validators.required)
  });

  constructor(private storage:Storage) { }

  ngOnInit() {
  }
    cadastrarHoraCerta(){
      console.log(this.formCadastrarHoraCerta.value);
    }


}
