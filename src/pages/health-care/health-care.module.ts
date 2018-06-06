import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthCarePage } from './health-care';

@NgModule({
  declarations: [
    HealthCarePage,
  ],
  imports: [
    IonicPageModule.forChild(HealthCarePage),
  ],
})
export class HealthCarePageModule {}
