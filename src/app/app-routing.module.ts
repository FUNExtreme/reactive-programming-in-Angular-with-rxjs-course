import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarshipsOverviewComponent } from './starships/components/starships-overview/starships-overview.component';
import { StarshipsOverviewDirtyComponent } from './starships/components/starships-overview-dirty/starships-overview-dirty.component';

const routes: Routes = [
  { path: 'starships', component: StarshipsOverviewComponent },
  { path: 'starships-dirty', component: StarshipsOverviewDirtyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
