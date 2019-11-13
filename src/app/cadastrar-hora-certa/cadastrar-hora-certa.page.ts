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
  formatarZerosEsquerda(valor:number){
      return valor > 10 ? valor : "0" + valor;
  }
  ngOnInit() {}
    cadastrarHoraCerta(){
     // console.log(this.formCadastrarHoraCerta.value);
     
     let form = this.formCadastrarHoraCerta.value;
     form.status = 0;
     
     let dataCompleta = new Date(form.data),
      horaCompleta = new Date(form.hora);

     let dia = this.formatarZerosEsquerda(dataCompleta.getDate()),
          mes = this.formatarZerosEsquerda(dataCompleta.getMonth() + 1),
          ano = this.formatarZerosEsquerda(dataCompleta.getFullYear()),
          hora = this.formatarZerosEsquerda(horaCompleta.getHours()),
          minutos = this.formatarZerosEsquerda(horaCompleta.getMinutes());

          form.data = dia + " / "+ mes +" / " + ano;
          form.hora = hora + ":" + minutos;

          console.log(form);

     let listaHoraCerta = [form];

     this.storage.get('listaHoraCerta').then((value:any) => {
        if (value === null || value === undefined)
        {
            let objeto = JSON.parse(value);
            listaHoraCerta = listaHoraCerta.concat(objeto);
          }
           this.storage.set('listaHoraCerta',JSON.stringify(listaHoraCerta));
      });
     
    }


}
