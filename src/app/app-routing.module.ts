import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { AppComponent } from './app.component';
import { TrafficComponent } from './components/traffic/traffic.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'stories', component: StoryComponent },
  { path: 'traffic', component: TrafficComponent }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
