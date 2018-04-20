import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerSettingsPage } from './customer-settings';

@NgModule({
  declarations: [
    CustomerSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSettingsPage),
  ],
  exports: [
    CustomerSettingsPage
  ]
})
export class CustomerSettingsPageModule {}
