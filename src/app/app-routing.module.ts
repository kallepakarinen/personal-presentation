import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './presentation/container/first-page/first-page.component';
import { ImagePageComponent } from './presentation/container/image-page/image-page.component';


const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'image', component: ImagePageComponent },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
