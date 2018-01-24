import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCategoryListComponent } from './video-category-list/video-category-list.component';
import { VideoListComponent } from './video-list/video-list.component';

//Services
import { VideoCategoryService } from './services/video-category.service';
import { VideoListService } from './services/video-list.service';

export const routes = [
  { path: '', component: VideoCategoryListComponent }, // note that video comes from app.route.ts
  { path: ":slug", component: VideoListComponent },
  { path: ":slug/:vdata", component: VideoListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VideoCategoryListComponent, VideoListComponent],
  providers: [
    VideoCategoryService,
    VideoListService
   ]
})
export class VideosModule { }
