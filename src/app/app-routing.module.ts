import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './comp/cv/cv.component';
import { ServiceComponent } from './comp/service/service.component';

const routes: Routes = [

  {path : 'service' , component : ServiceComponent},
  {path : 'cv' , component : CvComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
