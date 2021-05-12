import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnachtcountiesPageRoutingModule } from './connachtcounties-routing.module';

import { ConnachtcountiesPage } from './connachtcounties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnachtcountiesPageRoutingModule
  ],
  exports:[ConnachtcountiesPage],
  declarations: [ConnachtcountiesPage]

})
export class ConnachtcountiesPageModule {}
