import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPostPage } from './user-post';

@NgModule({
  declarations: [
    UserPostPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPostPage),
  ],
})
export class UserPostPageModule {}
