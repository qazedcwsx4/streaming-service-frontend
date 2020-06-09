import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {EntryListComponent} from '../entry-list/entry-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list', component: EntryListComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
