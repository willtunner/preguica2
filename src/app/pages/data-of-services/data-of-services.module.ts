import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataOfServicesPageRoutingModule } from './data-of-services-routing.module';

import { DataOfServicesPage } from './data-of-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataOfServicesPageRoutingModule
  ],
  declarations: [DataOfServicesPage]
})
export class DataOfServicesPageModule {}
