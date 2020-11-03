import { AboutComponent } from './../about/about.component';
import { TravelRequestComponent } from './../travel-request/travel-request.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: '', redirectTo: 'travel', pathMatch: 'full' },
  { path: 'travel', component: TravelRequestComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
