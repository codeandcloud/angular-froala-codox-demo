import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliceComponent } from './alice/alice.component';
import { BobComponent } from './bob/bob.component';

const routes: Routes = [
  { path: 'alice', component: AliceComponent },
  { path: 'bob', component: BobComponent },
  { path: '',   redirectTo: '/alice', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
