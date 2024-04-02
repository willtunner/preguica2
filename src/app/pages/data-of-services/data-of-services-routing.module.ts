import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataOfServicesPage } from './data-of-services.page';

const routes: Routes = [
  {
    path: '',
    component: DataOfServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataOfServicesPageRoutingModule {}
