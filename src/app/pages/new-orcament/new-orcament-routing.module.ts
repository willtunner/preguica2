import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOrcamentPage } from './new-orcament.page';

const routes: Routes = [
  {
    path: '',
    component: NewOrcamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOrcamentPageRoutingModule {}
