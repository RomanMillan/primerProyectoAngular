import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiniosModule } from './minios/minios.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MiniosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
