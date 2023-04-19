import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AlbumInfoComponent } from './components/album-info/album-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { RepetidasComponent } from './components/repetidas/repetidas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AlbumInfoComponent,
    HomeComponent,
    ResumeComponent,
    RepetidasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
