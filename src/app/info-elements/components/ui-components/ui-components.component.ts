import { Album } from './../../../store/models/album.model';
import { PlayerService } from './../../../shared/services/player/player.service';
import { State } from './../../../store/index';
import { Store } from '@ngrx/store';
import { IconItem } from './../../../shared/components/icons-buttons/icons.model';
import { Component, OnInit } from '@angular/core';
import { Song } from '../../../store/models/song.model';
import { PlaylistService } from '../../../shared/services/playlist/playlist.service';
import * as d3 from 'd3';
import 'd3-shape';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss']
})
export class UiComponentsComponent implements OnInit {

  // Pie date
  chartData = [
    {
      'name': '360 grader',
      'value': 2
    },
    {
      'name': 'Triatlon',
      'value': 1
    },
    {
      'name': 'Fitness',
      'value': 3
    },
    {
      'name': 'Håndbold',
      'value': 2
    },
    {
      'name': 'Dans',
      'value': 2
    },
    {
      'name': 'Fodbold',
      'value': 5
    }
  ];
  colorScheme = {
    domain: [
      '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
    ]
  };

  weatherBoxImage = 'assets/images/bg_weather1.png';

  // icons
  icons: IconItem[] = [
    {
      name: 'fingerprint',
      color: 'primary',
    },
    {
      name: 'redeem',
      color: 'accent',
    },
    {
      name: 'forum',
      color: 'warn',
    },
    {
      name: 'devices',
      color: 'primary',
    }
  ];

  startDate = new Date();

  // Playable card
  playlistImage = 'assets/images/artist1.jpg';
  playlistTitle = 'A playable card';
  playlistInfo = 'A playable card with items of an album';
  playlistSongs: Song[] = [
    {
      name: 'Behind the troubled winds',
      image: 'assets/images/album1.jpg',
      url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3',
    },
    {
      name: 'Together we stand',
      image: 'assets/images/album2.jpg',
      url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3',
    },
    {
      name: 'What are we?',
      image: 'assets/images/album3.jpg',
      url: 'http://ccmixter.org/content/admiralbob77/admiralbob77_-_The_Remixin_Blues_2.mp3',
    },
    {
      name: 'Sound of silence',
      image: 'assets/images/album4.jpg',
      url: 'http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3',
    }
  ];

  cardsColor = '#232837';

  single = [
    {
      'name': 'Popularity',
      'series': [
        {
          'name': '2010',
          'value': 200000
        },
        {
          'name': '2012',
          'value': 99940000
        },
        {
          'name': '2011',
          'value': 1940000
        },
        {
          'name': '2013',
          'value': 98940000
        },
        {
          'name': '2014',
          'value': 17940000
        }
      ]
    },
  ];

  lineColorScheme = {
    domain: [
      'rgba(0,0,0,0.5)',
    ]
  };

  userBoxImage = 'assets/images/people/henry.jpg';

  batch1days = [
    {
      name: '360 grader',
      updated: new Date('1/1/17'),
    },
    {
      name: 'Triatlon',
      updated: new Date('1/17/17'),
    },
    {
      name: 'Fitness',
      updated: new Date('1/28/17'),
    }
  ];
  batch2days = [
    {
      name: 'Håndbold',
      updated: new Date('2/20/17'),
    },
    {
      name: 'Triatlon',
      updated: new Date('1/18/17'),
    },
    {
      name: 'Fodbold',
      updated: new Date('2/01/17'),
    },
    {
      name: 'Dans',
      updated: new Date('3/12/17'),
    }
  ];

  constructor(private store: Store<State>,
    private player: PlayerService) { }

  ngOnInit() {
  }

  dateChange() {
    const newData: any = this.chartData.map(r => {
      return {
        name: r.name,
        value: r.value * Math.random() * (10 - 0) + 0,
      };
    });
    this.chartData = newData;
  }

  curve() {
    return d3.curveCardinal;
  }

  /**
   * Play a song from an album.
   *
   * @param song
   *  the song to play.
   */
  playSong(song: Song) {
    this.player.createPlayListOfSong(song);
  }

  /**
   * Play an album entirely
   */
  playSongs() {
    this.player.createPlayListOfListOfSongs(this.playlistSongs);
  }
}
