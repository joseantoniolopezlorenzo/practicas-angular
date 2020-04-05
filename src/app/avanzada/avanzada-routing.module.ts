import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvanzadaComponent } from './avanzada/avanzada.component';
import { Avanzada01Component } from './avanzada01/avanzada01.component';

const routes: Routes = [{
  path: 'avanzada',
  component: AvanzadaComponent
},
{
  path: 'avanzada/01',
  component: Avanzada01Component
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvanzadaRoutingModule { }
