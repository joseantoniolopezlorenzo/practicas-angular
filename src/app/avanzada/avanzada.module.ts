import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvanzadaRoutingModule } from './avanzada-routing.module';
import { AvanzadaComponent } from './avanzada/avanzada.component';
import { Avanzada01Component } from './avanzada01/avanzada01.component';


@NgModule({
  declarations: [AvanzadaComponent, Avanzada01Component],
  imports: [
    CommonModule,
    AvanzadaRoutingModule
  ]
})
export class AvanzadaModule { }
