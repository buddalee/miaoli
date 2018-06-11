import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoryComponent } from './components/story/story.component';
import { AppComponent } from './app.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { ContactComponent } from './components/contact/contact.component';
import { BatComponent } from './components/bat/bat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'stories', component: StoryComponent },
  { path: 'traffic', component: TrafficComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bat', component: BatComponent }    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
