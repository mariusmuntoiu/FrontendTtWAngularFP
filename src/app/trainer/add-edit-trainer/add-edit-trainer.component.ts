import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-trainer',
  templateUrl: './add-edit-trainer.component.html',
  styleUrls: ['./add-edit-trainer.component.css']
})
export class AddEditTrainerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() trainer:any;
  trainerID:string;
  name:string;
  gym:string;
  email:string;
  age:string;


  ngOnInit(): void {
    this.trainerID=this.trainer.trainerID;
    this.name=this.trainer.name;
    this.gym=this.trainer.gym;
    this.email=this.trainer.email;
    this.age=this.trainer.age;
  }

  addTrainer(){
    var val = {trainerID:this.trainerID,
              name:this.name,
              gym:this.gym,
              email:this.email,
              age:this.age};
        this.service.addTrainer(val).subscribe(res=>{
          alert(res.toString());
         
        });
      }
       
    

  updateTrainer(){
    var val = {trainerID:this.trainerID,
      name:this.name,
      age:this.age,
      gym:this.gym,
      email:this.email,
      };
    this.service.updateTrainer(val).subscribe(res=>{
      alert(res.toString());
  });

  }

}
