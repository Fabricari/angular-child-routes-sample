import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent-one', pathMatch: 'full' },
  { path: 'parent-one', component: ParentOneComponent },
  { path: 'parent-two', component: ParentTwoComponent, children: [
    { path: '', redirectTo: 'child-one', pathMatch: 'full' },
    { path: 'child-one', component: ChildOneComponent },
    { path: 'child-two', component: ChildTwoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
