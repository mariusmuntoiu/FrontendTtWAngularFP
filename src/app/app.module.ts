import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ShowTrainerComponent } from './trainer/show-trainer/show-trainer.component';
import { AddEditTrainerComponent } from './trainer/add-edit-trainer/add-edit-trainer.component';
import { SharedService} from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgramComponent } from './program/program.component';
import { ShowProgramComponent } from './program/show-program/show-program.component';
import { AddEditProgComponent } from './program/add-edit-prog/add-edit-prog.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    ShowTrainerComponent,
    AddEditTrainerComponent,
    ProgramComponent,
    ShowProgramComponent,
    AddEditProgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
