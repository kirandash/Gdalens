import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoList } from "../logic/video-list";
import { VideoListService } from "../services/video-list.service";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  
  videos: [VideoList];
  videodata: string;
  videocontent: string;

  constructor(private router: ActivatedRoute, private vlService: VideoListService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  	this.router.params.subscribe((params) => {
  		let slug = params['slug'];
      this.videodata = params['vdata'];
  		let self = this;
  		//console.log(slug);
  		self.vlService.getVideo(slug, this.videodata, response => {
        if(this.videodata != 'besog-os' && this.videodata != 'meld-dig-ind' ){
          response.forEach(function(part, index){
            //console.log(response[index]['url']);
            response[index]['url'] = self.sanitizer.bypassSecurityTrustResourceUrl(response[index]['url']);
            //console.log(response[index]['url']);
          });
          self.videos = response;
          // console.log(this.videos);
        }else{
          self.videocontent = response; 
        }
  		});
  	});
  }

}
