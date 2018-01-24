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
    
    const metabesog = '<h1>Besøg os - når det passer dig</h1><p>Du er altid velkommen til at komme på besøg på skolen.</p><p><strong>Hvis du overvejer at gå på Glamsdalen, er du altid velkommen på besøg. Vi arrangerer løbende besøgsdage derudover kan du aftale besøg individuelt.</strong></p><p>Når du kommer på besøg, er der altid et par elever, der giver en rundvisning, og en lærer, der fortæller om skolen.</p><p><img src="https://www.glamsdalen.dk/wp-content/uploads/2016/08/rammer.jpg" alt="rammer"></p><p><strong>Vi har følgende besøgsdage planlagt i den kommende periode.</strong></p><p><strong>Onsdag d. 10. januar 2018 kl. 18 (EFTERSKOLERNES AFTEN)<br></strong>Program under udarbejdelse. Vi lover det bliver godt!</p><p><strong>Søndag d. 4. februar 2018 kl. 14<br></strong>Åbent hus med introduktion, rundvisning og mulighed for spørgsmål.<br></p><p><a href="https://www.glamsdalen.dk/tilmelding-besoegsdag-4-2-2018/" target="_blank">TILMELD HER</a></p><p>Hvis der er et andet tidspunkt som passer dig bedre – dag, aften eller weekend – så kontakt kontoret på tlf 64723660 og aftal et tidspunkt.</p>';

    const metameld = '<h1>Meld dig ind</h1><p><strong>På Glamsdalens Idrætsefterskole er det vigtigt for os, at du ved, hvad du går ind til, før du begynder på skolen. Det giver dig de bedste forudsætninger for at blive glad for dit ophold. Derfor inviterer vi dig til et præsentationsmøde i efteråret og til forberedelsesmøde i foråret inden skolestart.</strong></p><p>Når du har besluttet dig for dit efterskoleår på Glamsdalen, skal du sende os en indmeldelse.</p><p>Først udfylder du <a href="https://www.glamsdalen.dk/indmeldelsesformular/" target="_blank">indmeldelsesformularen</a> elektronisk sammen med dine forældre. Se menuen ude til højre. Det er vigtigt, at I har læst om økonomi og betalingsregler, inden I sender formularen.</p><p>På indmeldelsesformularen angiver du,&nbsp;hvilket boglige spor og hvilken idrætslinje du ønsker.</p><p>Vi optager elever i den rækkefølge, de melder sig ind. Du får en mail fra os, der enten bekræfter, at du er optaget, eller at du står venteliste.</p><p><img class="alignnone size-full wp-image-1298" src="https://www.glamsdalen.dk/wp-content/uploads/2016/09/441.jpg" alt="441" width="683" height="205"></p><p class="dontend"><strong>Der er to arrangementer inden skolestart<br></strong>Et år på idrætsefterskole er en stor forandring for de fleste, og derfor er det rigtig vigtigt, at vi kigger hinanden dybt i øjnene først. Hvor skal du bo, hvem er lærerne, hvordan foregår hverdagen – og hvilke fag vil du have? Alt det og meget mere vil vi gerne sikre os, at du er dus med. Vi håber derfor at du og dine forældre har mulighed for at deltage &nbsp;i to arrangementer inden skolestart:</p><ul><li><p>Et præsentationsmøde i efteråret inden skolestart</p></li><li><p>Et forberedelsesmøde i foråret inden skolestart. Her vælger du også dine valgfag.</p></li></ul><p>Når du er indmeldt, sørger vi for, du også bliver inviteret til arrangementerne. Hvis du ikke har mulighed for at deltage på de fastsatte datoer, kan du få en aftale med os om at besøge os på et andet tidspunkt.</p><p class="dontend"><strong>Hvis du kommer på venteliste<br></strong>Hvis din årgang er fyldt op, når du søger, kommer du på venteliste. Normalt bliver der ledige pladser i løbet af året før skolestart, så du har stadig gode muligheder for at blive optaget.<br>Vi optager elever fra ventelisten i den rækkefølge, der er indmeldt. Dog forbeholder vi os ret til at fylde idrætslinjerne op, så alle kan få et udbytterigt ophold.</p><p><strong>God kontakt mellem skole og forældre<br></strong>Dine forældre får mindst&nbsp;4 lejligheder til at besøge skolen i løbet af året:</p><ul><li ><p>Forældredag med&nbsp;aktiviteter og samvær&nbsp;i slutningen af august</p></li><li><p>Forældredag med konsultation i november/december</p></li><li><p>Forældredag i marts/april</p></li><li><p>Skoleafslutningen i juni</p></li></ul><p>Hvis de har spørgsmål eller andet, er de altid velkomne til at kontakte din huslærer og i øvrigt besøge skolen i løbet af året. Det er dog en god idé at aftale tidspunktet med skolen i forvejen, da der ofte er arrangementer og ture.<br>Dine forældre kan også følge årets gang her på hjemmesiden, Facebook, Instagram eller ved at logge ind på skolens intranet.</p><p>Har du eller dine forældre spørgsmål om indmeldelse, ventelister eller andet, er I altid velkomne til at kontakte os på telefon 6472 3660.</p>';

    if(vdata == 'besog-os'){
      callback(metabesog);
    }else if(vdata == 'meld-dig-ind'){
      callback(metameld);
    }else if(vdata == null){
      callback(list[slug]);
    }
  }

}
