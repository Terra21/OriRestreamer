import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StreamCMP } from './stream/stream.cmp';
import { ControlsCMP } from './controls/controls.cmp'
import { InformationService } from './services/information.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlsCMP,
    StreamCMP
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent, ControlsCMP, StreamCMP]
})
export class AppModule {
  constructor(){}
 }
