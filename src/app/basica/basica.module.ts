import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicaRoutingModule } from './basica-routing.module';
import { BasicaComponent } from './basica/basica.component';
import { Basica01Component } from './basica01/basica01.component';


@NgModule({
  declarations: [BasicaComponent,  Basica01Component],
  imports: [
    CommonModule,
    BasicaRoutingModule
  ]
})
export class BasicaModule { }
