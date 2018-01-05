import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardCMP } from './dashboard/dashboard.cmp';
import { StreamCMP } from './stream/stream.cmp';
import { ControlsCMP } from './controls/controls.cmp'

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardCMP },
  { path: 'stream', component: StreamCMP },
  { path: 'controls', component: ControlsCMP, },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ControlsCMP,
    DashboardCMP,
    StreamCMP
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){}
 }
