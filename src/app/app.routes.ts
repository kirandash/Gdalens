import { VideoCategoryListComponent } from './videos/video-category-list/video-category-list.component';
import { VideoListComponent } from './videos/video-list/video-list.component';

export const routes = [
    { path: '', redirectTo: 'artists', pathMatch: 'full' },
    { path: 'videos', component: VideoCategoryListComponent },
    { path: "videos/:slug", component: VideoListComponent },
    { path: "videos/:slug/:vdata", component: VideoListComponent },
    { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
    { path: 'playlists', loadChildren: './playlist/playlist.module#PlaylistModule' },
    { path: 'queue', loadChildren: './queue/queue.module#QueueModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: 'ui', loadChildren: './ui-elements/ui-elements.module#UiElementsModule' },
];
