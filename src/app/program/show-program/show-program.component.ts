import { Component, OnInit } from '@angular/core';

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

  ProgramCategoryFilter:string ="";
  ProgramTrainerFilter:string="";
  ProgramNameFilter:string="";
  ProgramListWithoutFilter:any=[];
  

  ngOnInit(): void {
    this.refreshProgramList();
    document.body.classList.add('bodycustom');
    document.body.style.background='#000';
    document.body.style.background='url(\'https://images.pexels.com/photos/6740305/pexels-photo-6740305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\') no-repeat';
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundPosition ="center"
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
      this.ProgramListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ProgramCategoryFilter= this.ProgramCategoryFilter;
    var ProgramNameFilter= this.ProgramNameFilter;
    var ProgramTrainerFilter = this.ProgramTrainerFilter
    

    this.ProgramList = this.ProgramListWithoutFilter.filter(function(el){
      return el.category.toString().toLowerCase().includes(
        ProgramCategoryFilter.toString().trim().toLowerCase()
      ) &&
      el.progName.toString().toLowerCase().includes(
        ProgramNameFilter.toString().trim().toLowerCase()
      ) 

    });
  }

}
