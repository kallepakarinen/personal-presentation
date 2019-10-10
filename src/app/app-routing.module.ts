import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './presentation/container/first-page/first-page.component';
import { ImagePageComponent } from './presentation/container/image-page/image-page.component';
import { WorkSchoolComponent } from './presentation/container/work-school/work-school.component';
import { TechniquesComponent } from './presentation/container/techniques/techniques.component';


const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'image', component: ImagePageComponent },
  { path: 'works', component: WorkSchoolComponent },
  { path: 'techniques', component: TechniquesComponent },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
