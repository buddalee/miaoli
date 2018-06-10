import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { StoryComponent } from './components/story/story.component';
import { TrafficComponent } from './components/traffic/traffic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    TrafficComponent
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
