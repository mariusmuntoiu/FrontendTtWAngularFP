import { Component, OnInit, Input } from '@angular/core';
import { CourseModel } from 'src/app/model/course-model';
import { Trainer } from 'src/app/model/trainer-model';
import { SharedService } from 'src/app/shared.service';
import { CourseComponent } from '../course.component';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  constructor(private service:SharedService) { }
  course: CourseModel = new CourseModel();

  @Input() 
  courseId:string;
  csName:string;
  csDate:Date;
  details:string;
  trainersList:Trainer[]= [];
  trainer:Trainer = new Trainer();
  

  CourseList:any =[];
  

  ngOnInit(): void {
    this.refreshCourseList();
  }

  refreshCourseList(){
    this.service.getCourseList().subscribe(data =>{
      this.CourseList = data;
    });
  }

  addCourse(){
    var val = {courseId:this.courseId,
              csName:this.csName,
              csDate:this.csDate,
              details:this.details,
              trainersList:this.trainersList};
        this.service.addCourse(val).subscribe(res=>{
          alert(res.toString());
         
        });
      }

      
    
}
