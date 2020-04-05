import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicaComponent } from './basica/basica.component';
import { Basica01Component } from './basica01/basica01.component';

const routes: Routes = [{
  path: 'basica',
  component: BasicaComponent
},
  {
    path: 'basica/01',
    component: Basica01Component
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicaRoutingModule { }
