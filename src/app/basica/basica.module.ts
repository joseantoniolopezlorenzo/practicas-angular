import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightJsModule } from 'ngx-highlight-js';
import { BasicaRoutingModule } from './basica-routing.module';
import { BasicaComponent } from './basica/basica.component';
import { Basica01Component } from './basica01/basica01.component';
import { Bas01sub01Component } from './basica01/bas01sub01/bas01sub01.component';


@NgModule({
  declarations: [BasicaComponent,  Basica01Component, Bas01sub01Component],
  imports: [
    CommonModule,
    HighlightJsModule,
    BasicaRoutingModule
  ]
})
export class BasicaModule { }
