import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: "full" },
  // { path: 'list', component: ListComponent },
  // { path: 'list', loadChildren: './list/list.module#ListModule' }
  { path: 'list', loadChildren: () => import('../app/components/list/list.module').then(x => x.ListModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
