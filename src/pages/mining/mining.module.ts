import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiningPage } from './mining';

@NgModule({
  declarations: [
    MiningPage,
  ],
  imports: [
    IonicPageModule.forChild(MiningPage),
  ],
})
export class MiningPageModule {}
