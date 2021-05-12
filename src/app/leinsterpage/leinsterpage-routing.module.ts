import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeinsterpagePage } from './leinsterpage.page';

const routes: Routes = [
  {
    path: '',
    component: LeinsterpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeinsterpagePageRoutingModule {}
