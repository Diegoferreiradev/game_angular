import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';

@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  exports:[
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JogoDaVelhaModule { }
