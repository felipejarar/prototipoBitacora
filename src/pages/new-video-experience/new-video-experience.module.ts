import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewVideoExperiencePage } from './new-video-experience';

@NgModule({
  declarations: [
    NewVideoExperiencePage,
  ],
  imports: [
    IonicPageModule.forChild(NewVideoExperiencePage),
  ],
})
export class NewVideoExperiencePageModule {}
