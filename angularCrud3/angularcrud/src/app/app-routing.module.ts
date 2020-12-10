import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudAddComponent } from './components/crud-add/crud-add.component';
import { CrudGetComponent } from './components/crud-get/crud-get.component';

const routes: Routes = [
  { path: '', redirectTo: '/business', pathMatch: 'full' },
  {
    path: 'business/create',
    component: CrudAddComponent
  },
  {
    path: 'business',
    component: CrudGetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
