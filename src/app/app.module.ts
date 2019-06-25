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
import { DataUnsubscribeComponent } from './observables-subscriptions/data-unsubscribe/data-unsubscribe.component';
import { DataTakeUntilComponent } from './observables-subscriptions/data-take-until/data-take-until.component';
import { DataAsyncPipeComponent } from './observables-subscriptions/data-async-pipe/data-async-pipe.component';
import { OperatorUppercaseComponent } from './observables-operators-custom/operator-uppercase/operator-uppercase.component';
import { ObservableHotComponent } from './observables-hot-cold/observable-hot/observable-hot.component';
import { ObservableColdComponent } from './observables-hot-cold/observable-cold/observable-cold.component';
import { DataNoUnsubscribeComponent } from './observables-subscriptions/data-no-unsubscribe/data-no-unsubscribe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StarshipsOverviewComponent,
    StartshipsDetailComponent,
    StarshipsOverviewDirtyComponent,
    RouterComponent,
    OutputComponent,
    ReactiveFormsComponent,
    HttpClientComponent,
    DataUnsubscribeComponent,
    DataTakeUntilComponent,
    DataAsyncPipeComponent,
    OperatorUppercaseComponent,
    ObservableHotComponent,
    ObservableColdComponent,
    DataNoUnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
