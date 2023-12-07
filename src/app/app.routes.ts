import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: VideoPlayerComponent,
      },
    ],
  },
];
