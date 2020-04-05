import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntermediaRoutingModule } from './intermedia-routing.module';
import { IntermediaComponent } from './intermedia/intermedia.component';
import { Intermedia01Component } from './intermedia01/intermedia01.component';


@NgModule({
  declarations: [IntermediaComponent, Intermedia01Component],
  imports: [
    CommonModule,
    IntermediaRoutingModule
  ]
})
export class IntermediaModule { }
