import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnachtcountiesPage } from './connachtcounties.page';

const routes: Routes = [
  {
    path: '',
    component: ConnachtcountiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnachtcountiesPageRoutingModule {}
