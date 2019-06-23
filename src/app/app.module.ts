import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsOverviewComponent } from './starships/components/starships-overview/starships-overview.component';
import { StartshipsDetailComponent } from './starships/components/startships-detail/startships-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsOverviewComponent,
    StartshipsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
