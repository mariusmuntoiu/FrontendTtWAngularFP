import { Component, OnInit } from '@angular/core';
import { Trainer } from 'src/app/model/trainer';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-program',
  templateUrl: './show-program.component.html',
  styleUrls: ['./show-program.component.css']
})
export class ShowProgramComponent implements OnInit {
  constructor(private service:SharedService) { }

  ProgramList:any =[];

  ModalTitle:string;
  ActivateAddEditProgramComp:boolean = false;
  program:any;

  ngOnInit(): void {
    this.refreshProgramList();
  }

  addClick(){
    this.program= {
      programID: 0,
      progName: "",
      category:"",
      description: "",
      trainer: ""
    }
    this.ModalTitle="Add Program";
    this.ActivateAddEditProgramComp=true;

  }

  editClick(item){
    this.program=item;
    this.ModalTitle="Edit Program";
    this.ActivateAddEditProgramComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteProgram(item.programID).subscribe(data =>{
       // alert(data.toString());
        this.refreshProgramList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProgramComp = false;
    this.refreshProgramList();
  }

  refreshProgramList(){
    this.service.getProgramList().subscribe(data =>{
      this.ProgramList = data;
    });
  }

}
