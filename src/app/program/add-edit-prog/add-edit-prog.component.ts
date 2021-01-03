import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-prog',
  templateUrl: './add-edit-prog.component.html',
  styleUrls: ['./add-edit-prog.component.css']
})
export class AddEditProgComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() program:any;
  programID:string;
  name:string;
  category:string;
  description:string;
  trainer:string;
  


  ngOnInit(): void {
    this.programID=this.program.programID;
    this.name=this.program.name;
    this.category=this.program.category;
    this.description=this.program.description;
    this.trainer=this.program.trainer;
  }

  addProgram(){
    var val = {programID:this.programID,
              name:this.name,
              category:this.category,
              description:this.description,
              trainer:this.trainer};
        this.service.addProgram(val).subscribe(res=>{
          alert(res.toString());
         
        });
      }
       
    

  updateProgram(){
    var val = {programID:this.programID,
      name:this.name,
      category:this.category,
      description:this.description,
      trainer:this.trainer};
    this.service.updateProgram(val).subscribe(res=>{
      alert(res.toString());
  });

  }

}
