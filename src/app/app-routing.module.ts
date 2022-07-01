import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPeopleComponent } from './detail/detail-people.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
  { path:'', redirectTo:'liste', pathMatch:'full' },
  { path:'liste', component: ListeComponent},
  { path: 'detail/:id', component: DetailPeopleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
