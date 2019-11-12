import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarHoraCertaPage } from './cadastrar-hora-certa.page';

import { IonicStorageModule } from '@ionic/storage';


const routes: Routes = [
  {
    path: '',
    component: CadastrarHoraCertaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarHoraCertaPage]
})
export class CadastrarHoraCertaPageModule {}
