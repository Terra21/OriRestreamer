import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardCMP } from './dashboard/dashboard.cmp';
import { StreamCMP } from './stream/stream.cmp';
import { Stream4WayCMP } from './stream-4way/stream-4way.cmp';
import { ControlsCMP } from './controls/controls.cmp';
import { GroupsCMP } from './groups/groups.cmp';
import { SplashCMP } from './splash/splash.cmp';
import { BracketCMP } from './bracket/bracket.cmp';
import { StatsCMP } from './stats/stats.cmp';
import { CreditsCMP } from './credits/credits.cmp';
import { IntermissionCMP } from './intermission/intermission.cmp';
import { DivisionComponent } from './division/division.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardCMP },
  { path: 'stream', component: StreamCMP },
  { path: 'stream-4way', component: Stream4WayCMP },
  { path: 'controls', component: ControlsCMP, },
  { path: 'groups', component: GroupsCMP },
  { path: 'splash', component: SplashCMP },
  { path: 'bracket', component: BracketCMP },
  { path: 'stats', component: StatsCMP },
  { path: 'credits', component: CreditsCMP },
  { path: 'intermission', component: IntermissionCMP },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ControlsCMP,
    DashboardCMP,
    StreamCMP,
    Stream4WayCMP,
    GroupsCMP,
    SplashCMP,
    BracketCMP,
    StatsCMP,
    CreditsCMP,
    IntermissionCMP,
    DivisionComponent
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
