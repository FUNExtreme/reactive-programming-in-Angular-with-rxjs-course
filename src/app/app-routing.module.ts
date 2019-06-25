import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsOverviewComponent } from './starships/components/starships-overview/starships-overview.component';
import { StarshipsOverviewDirtyComponent } from './starships/components/starships-overview-dirty/starships-overview-dirty.component';
import { HttpClientComponent } from './observables-in-angular/http-client/http-client.component';
import { OutputComponent } from './observables-in-angular/output/output.component';
import { ReactiveFormsComponent } from './observables-in-angular/reactive-forms/reactive-forms.component';
import { RouterComponent } from './observables-in-angular/router/router.component';
import { ObservableColdComponent } from './observables-hot-cold/observable-cold/observable-cold.component';
import { ObservableHotComponent } from './observables-hot-cold/observable-hot/observable-hot.component';
import { DataAsyncPipeComponent } from './observables-subscriptions/data-async-pipe/data-async-pipe.component';
import { DataUnsubscribeComponent } from './observables-subscriptions/data-unsubscribe/data-unsubscribe.component';
import { DataTakeUntilComponent } from './observables-subscriptions/data-take-until/data-take-until.component';
import { DataNoUnsubscribeComponent } from './observables-subscriptions/data-no-unsubscribe/data-no-unsubscribe.component';
import { OperatorUppercaseComponent } from './observables-operators-custom/operator-uppercase/operator-uppercase.component';

const routes: Routes = [
  { path: 'starships', component: StarshipsOverviewComponent },
  { path: 'starships-dirty', component: StarshipsOverviewDirtyComponent },
  {
    path: 'observables-in-angular',
    children: [
      { path: 'http-client', component: HttpClientComponent },
      { path: 'output', component: OutputComponent },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      {
        path: 'router',
        children: [
          { path: '', component: RouterComponent },
          { path: ':id', component: RouterComponent }
        ]
      }
    ]
  },
  {
    path: 'observables-hot-cold',
    children: [
      { path: 'cold', component: ObservableColdComponent },
      { path: 'hot', component: ObservableHotComponent }
    ]
  },
  {
    path: 'observables-operators-custom',
    children: [
      { path: 'uppercase', component: OperatorUppercaseComponent }
    ]
  },
  {
    path: 'observables-subscriptions',
    children: [
      { path: 'async-pipe', component: DataAsyncPipeComponent },
      { path: 'take-until', component: DataTakeUntilComponent },
      { path: 'unsubscribe', component: DataUnsubscribeComponent },
      { path: 'no-unsubscribe', component: DataNoUnsubscribeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
