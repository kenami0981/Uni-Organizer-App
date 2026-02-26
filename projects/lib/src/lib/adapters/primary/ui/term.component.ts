import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { FirebaseSemesterService } from "../../secondary/infrastructure/firebase-semester.service"
import { FirebaseSubjectService } from "../../secondary/infrastructure/firebase-subject.service"
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({ 
    standalone: true,
    imports: [CommonModule, RouterLink],
    selector: 'lib-term', 
    templateUrl: './term.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class TermComponent {
    private semesterService = inject(FirebaseSemesterService);
    semesters$ = this.semesterService.getSemesters();


  addSemester(value:string) {
    this.semesterService.addSemester(value);
  }
}
