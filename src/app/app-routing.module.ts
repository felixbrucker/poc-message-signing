import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignDiscComponent} from "./sign-disc/sign-disc.component";
import {SignBurstComponent} from "./sign-burst/sign-burst.component";
import {SignBhdComponent} from "./sign-bhd/sign-bhd.component";

const routes: Routes = [
  { path: '', component: SignBhdComponent, pathMatch: 'full' },
  { path: 'bhd', component: SignBhdComponent, pathMatch: 'full' },
  { path: 'disc', component: SignDiscComponent, pathMatch: 'full' },
  { path: 'burst', component: SignBurstComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
