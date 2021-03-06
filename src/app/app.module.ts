import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { StoryComponent } from './components/story/story.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { ContactComponent } from './components/contact/contact.component';
import { BatComponent } from './components/bat/bat.component';
import { ViewPointComponent } from './components/view-point/view-point.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    TrafficComponent,
    ContactComponent,
    BatComponent,
    ViewPointComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
