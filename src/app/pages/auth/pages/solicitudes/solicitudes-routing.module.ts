import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudesModule } from './solicitudes.module';
import { SolicitudesComponent } from './solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
