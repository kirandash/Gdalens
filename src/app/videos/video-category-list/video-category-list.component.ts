import { Component, OnInit } from '@angular/core';

import { VideoCategory } from '../logic/video-category';
import { VideoCategoryService } from '../services/video-category.service';

@Component({
  selector: 'app-video-category-list',
  templateUrl: './video-category-list.component.html',
  styleUrls: ['./video-category-list.component.scss']
})
export class VideoCategoryListComponent implements OnInit {

  videos: [VideoCategory];
  constructor(private vidcatService: VideoCategoryService) { }

  ngOnInit() {
  	this.vidcatService.getList(catsList => {
  		this.videos = catsList;
  	});
  }

}
