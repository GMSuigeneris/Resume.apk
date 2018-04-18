import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriterPage } from './writer';

@NgModule({
  declarations: [
    WriterPage,
  ],
  imports: [
    IonicPageModule.forChild(WriterPage),
  ],
})
export class WriterPageModule {}
