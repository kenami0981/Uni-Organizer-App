import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { FirebaseSemesterService } from "../../secondary/infrastructure/firebase-semester.service"
import { FirebaseSubjectService } from "../../secondary/infrastructure/firebase-subject.service"
import { CommonModule } from '@angular/common';
@Component({ 
    standalone: true,
    imports: [CommonModule],
    selector: 'lib-term', 
    templateUrl: './term.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class TermComponent {
    private semesterService = inject(FirebaseSemesterService);
    private subjectService = inject(FirebaseSubjectService);
  semesters$ = this.semesterService.getSemesters();
  subjects$ : any;
onSemesterClicked(semesterID: string) {
    this.subjects$ = this.subjectService.getSubjects(semesterID);
  }
  addSemester(value:string) {
    this.semesterService.addSemester(value);
  }
}
