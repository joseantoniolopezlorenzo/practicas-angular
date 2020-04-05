import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntermediaComponent } from './intermedia/intermedia.component';
import { Intermedia01Component } from './intermedia01/intermedia01.component';

const routes: Routes = [
  {
    path: 'intermedia',
    component: IntermediaComponent
  },
  {
    path: 'intermedia/01',
    component: Intermedia01Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntermediaRoutingModule { }
