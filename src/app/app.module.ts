import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipsOverviewComponent } from './starships/components/starships-overview/starships-overview.component';
import { StartshipsDetailComponent } from './starships/components/startships-detail/startships-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsOverviewDirtyComponent } from './starships/components/starships-overview-dirty/starships-overview-dirty.component';
import { RouterComponent } from './observables-in-angular/router/router.component';
import { OutputComponent } from './observables-in-angular/output/output.component';
import { ReactiveFormsComponent } from './observables-in-angular/reactive-forms/reactive-forms.component';
import { HttpClientComponent } from './observables-in-angular/http-client/http-client.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsOverviewComponent,
    StartshipsDetailComponent,
    StarshipsOverviewDirtyComponent,
    RouterComponent,
    OutputComponent,
    ReactiveFormsComponent,
    HttpClientComponent
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
