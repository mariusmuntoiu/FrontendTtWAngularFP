import { Trainer } from "./trainer-model";

export class CourseModel {
    courseId: number;
    csName: string;
    csDate: Date;
    details: string;
    trainerLs: Trainer[];
}

