import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildWatchReproLibModule } from 'build-watch-repro-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BuildWatchReproLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
