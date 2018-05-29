import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskpagePage } from './taskpage';

@NgModule({
  declarations: [
    TaskpagePage,
  ],
  imports: [
    IonicPageModule.forChild(TaskpagePage),
  ],
})
export class TaskpagePageModule {}
