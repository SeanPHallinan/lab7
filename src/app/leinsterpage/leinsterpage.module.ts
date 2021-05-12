import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeinsterpagePageRoutingModule } from './leinsterpage-routing.module';

import { LeinsterpagePage } from './leinsterpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeinsterpagePageRoutingModule
  ],
  declarations: [LeinsterpagePage]
})
export class LeinsterpagePageModule {}
