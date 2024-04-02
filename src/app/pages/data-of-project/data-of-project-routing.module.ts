import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataOfProjectPage } from './data-of-project.page';

const routes: Routes = [
  {
    path: '',
    component: DataOfProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataOfProjectPageRoutingModule {}
