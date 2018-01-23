import { Injectable } from '@angular/core';
import { VideoList } from "../logic/video-list";

@Injectable()
export class VideoListService {

  constructor() { }

  getVideo(slug: string, vdata: string, callback) {    
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
    
    const metabesog = {
        "360-grader": '<h1>Besøg os - når det passer dig</h1><p>Du er altid velkommen til at komme på besøg på skolen.</p><p><strong>Hvis du overvejer at gå på Glamsdalen, er du altid velkommen på besøg. Vi arrangerer løbende besøgsdage derudover kan du aftale besøg individuelt.</strong></p><p>Når du kommer på besøg, er der altid et par elever, der giver en rundvisning, og en lærer, der fortæller om skolen.</p><p><img src="https://www.glamsdalen.dk/wp-content/uploads/2016/08/rammer.jpg" alt="rammer"></p><p><strong>Vi har følgende besøgsdage planlagt i den kommende periode.</strong></p><p><strong>Onsdag d. 10. januar 2018 kl. 18 (EFTERSKOLERNES AFTEN)<br></strong>Program under udarbejdelse. Vi lover det bliver godt!</p><p><strong>Søndag d. 4. februar 2018 kl. 14<br></strong>Åbent hus med introduktion, rundvisning og mulighed for spørgsmål.<br></p><p><a href="https://www.glamsdalen.dk/tilmelding-besoegsdag-4-2-2018/" target="_blank">TILMELD HER</a></p><p>Hvis der er et andet tidspunkt som passer dig bedre – dag, aften eller weekend – så kontakt kontoret på tlf 64723660 og aftal et tidspunkt.</p>',
        "triatlon": "Lorem 2",
        "adventure": "Lorem 3",
        "fitness": "Lorem 4",
        "håndbold": "Lorem 5",
        "fodbold": "Lorem 6",
        "badminton": "Lorem 7",
        "dans": "Lorem 8",
        "e-Sport": "Lorem 9",
    };

    const metameld = {
        "360-grader": "Lorem 10",
        "triatlon": "Lorem 11",
        "adventure": "Lorem 12",
        "fitness": "Lorem 13",
        "håndbold": "Lorem 14",
        "fodbold": "Lorem 15",
        "badminton": "Lorem 16",
        "dans": "Lorem 17",
        "e-Sport": "Lorem 18",
    };

    if(vdata == 'besog-os'){
      callback(metabesog);
    }else if(vdata == 'meld-dig-ind'){
      callback(metameld);
    }else if(vdata == null){
      callback(list[slug]);
    }
  }

}
