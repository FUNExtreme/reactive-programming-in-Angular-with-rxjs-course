import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsOverviewComponent } from './starships/components/starships-overview/starships-overview.component';
import { StartshipsDetailComponent } from './starships/components/startships-detail/startships-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsOverviewDirtyComponent } from './starships/components/starships-overview-dirty/starships-overview-dirty.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsOverviewComponent,
    StartshipsDetailComponent,
    StarshipsOverviewDirtyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
