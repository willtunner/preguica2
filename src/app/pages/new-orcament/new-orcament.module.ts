import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOrcamentPageRoutingModule } from './new-orcament-routing.module';

import { NewOrcamentPage } from './new-orcament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOrcamentPageRoutingModule
  ],
  declarations: [NewOrcamentPage]
})
export class NewOrcamentPageModule {}
