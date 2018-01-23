import { Injectable } from '@angular/core';
import { VideoCategory } from '../logic/video-category';

@Injectable()
export class VideoCategoryService {

  constructor() { }

  getList(callback) {
  	const list = [
  		new VideoCategory("360 grader", "/assets/images/videos/video-category-1.jpg", "360-grader"),
  		new VideoCategory("Triatlon", "/assets/images/videos/video-category-2.jpg", "triatlon"),
  		new VideoCategory("Adventure", "/assets/images/videos/video-category-3.jpg", "adventure"),
  		new VideoCategory("Fitness", "/assets/images/videos/video-category-4.jpg", "fitness"),
  		new VideoCategory("Håndbold", "/assets/images/videos/video-category-5.jpg", "håndbold"),
  		new VideoCategory("Fodbold", "/assets/images/videos/video-category-6.jpg", "fodbold"),
  		new VideoCategory("Badminton", "/assets/images/videos/video-category-7.jpg", "badminton"),
  		new VideoCategory("Dans", "/assets/images/videos/video-category-8.jpg", "dans"),
  		new VideoCategory("E-Sport", "/assets/images/videos/video-category-9.jpg", "e-Sport")
  	];
  	callback(list);
  }

}
