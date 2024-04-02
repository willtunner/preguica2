import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataOfProjectPageRoutingModule } from './data-of-project-routing.module';

import { DataOfProjectPage } from './data-of-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataOfProjectPageRoutingModule
  ],
  declarations: [DataOfProjectPage]
})
export class DataOfProjectPageModule {}
