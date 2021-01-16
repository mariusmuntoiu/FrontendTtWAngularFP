import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerComponent } from './trainer/trainer.component';
import { ProgramComponent } from './program/program.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{path: '', pathMatch:"full", redirectTo:"/home"},
{path:'trainer', component:TrainerComponent},
{path:'program', component:ProgramComponent},
{path: 'course', component:CourseComponent},
{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
