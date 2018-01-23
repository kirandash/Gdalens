import { Injectable } from '@angular/core';
import { VideoList } from "../logic/video-list";

@Injectable()
export class VideoListService {

  constructor() { }

  getVideo(slug: string, callback) {
  	const list = {
  		"360-grader": [
  			new VideoList("360 grader", "https://www.youtube.com/embed/WLxEo85NI74", "Sep 8 2015", "Glamsdalen"),
  			new VideoList("Extreme run 2016", "https://www.youtube.com/embed/fqMmy7me2ow", "Oct 15, 2016", "Javi As"),
  			new VideoList("Bølgen", "https://www.youtube.com/embed/d5-DOEkL4Co", "Oct 25, 2016", "Glamsdalen")
  		],
  		"triatlon": [
  			new VideoList("Tri linje", "https://www.youtube.com/embed/eRS0vDV6XRM", "Sep 20, 2016", "Glamsdalen"),
  			new VideoList("Se personalet", "https://www.youtube.com/embed/rdNlwx-SKRo", "Jan 4, 2016", "Glamsdalen")
  		],
  		"adventure": [
  			new VideoList("Adventurelinje", "https://www.youtube.com/embed/LBBxU_9FGwE", "May 18, 2016", "Glamsdalen"),
  			new VideoList("Officiel Præsentationsvideo", "https://www.youtube.com/embed/B3OuO5JDSMI", "Jun 27, 2014", "Glamsdalen")
  		],
  		"fitness": [
  			new VideoList("Linje10 - Crossfit", "https://www.youtube.com/embed/HtHF7GmruSw", "Jun 9, 2012", "Glamsdalen"),
  			new VideoList("Linje10 - Slagbold", "https://www.youtube.com/embed/6H0BS3va6T4", "May 28, 2014", "Glamsdalen")
  		],
  		"håndbold": [
  			new VideoList("Efterskolecamp 23-30 2016", "https://www.youtube.com/embed/3IAZCRVUUlM", "May 17, 2016", "Glamsdalen"),
  			new VideoList("FINALE! AABYBRO mod VEJLE", "https://www.youtube.com/embed/6yob6D6t5Oc", "May 28, 2014", "Glamsdalen")
  		],
  		"fodbold": [
  			new VideoList("Fodbold", "https://www.youtube.com/embed/3IAZCRVUUlM", "May 17, 2016", "Glamsdalen")
  		],
  		"badminton": [
  			new VideoList("Adventurelinje", "https://www.youtube.com/embed/eRS0vDV6XRM", "Sep 20, 2016", "Glamsdalen")
  		],
  		"dans": [
  			new VideoList("HIP HOP", "https://www.youtube.com/embed/lzFlNPGjWU0", "Apr 18, 2016", "Glamsdalen"),
  			new VideoList("Danselinjen 17/18", "https://www.youtube.com/embed/YGqdCr9Jq_k", "Dec 8, 2017", "Glamsdalen"),
  			new VideoList("Juleafslutning 2017", "https://www.youtube.com/embed/je-E1vii4K8", "Dec 21, 2017", "Glamsdalen"),
  			new VideoList("Gallaaften 16/17", "https://www.youtube.com/embed/MGNgbjPfvE0", "Nov 2, 2017", "Glamsdalen"),
  			new VideoList("Freestyle DM i dans", "https://www.youtube.com/embed/mG_hwW6oJxU", "Dec 21, 2017", "Glamsdalen"),
  			new VideoList("Dm i dans", "https://www.youtube.com/embed/RF_DnI8qwVg", "Apr 22, 2015", "Glamsdalen")
  		],
  		"e-Sport": [
  			new VideoList("Rundvisning", "https://www.youtube.com/embed/<nv1IazwINKU></nv1IazwINKU>", "Jun 8, 2012", "Glamsdalen")
  		]
  	};
  	callback(list[slug]);
  }

}
