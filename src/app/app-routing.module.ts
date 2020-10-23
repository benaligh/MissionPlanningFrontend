import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsMissionComponent } from './details-mission/details-mission.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'details/:id', component:DetailsMissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
