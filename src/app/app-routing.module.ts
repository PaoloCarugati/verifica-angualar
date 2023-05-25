import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondiComponent } from './secondi/secondi.component';
import { PrimiComponent } from './primi/primi.component';
const routes: Routes = [
  { path: 'primi', component: PrimiComponent},
  { path: 'secondi', component: SecondiComponent},
  { path: '', redirectTo: '/secondi', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
