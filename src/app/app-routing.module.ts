import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { ProgramComponent } from './program/program.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:'trainer', component:TrainerComponent},
{path:'program', component:ProgramComponent},
{path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
