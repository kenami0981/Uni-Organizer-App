import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseSubjectService } from '../../secondary/infrastructure/firebase-subject.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirebaseSemesterService } from '../../secondary/infrastructure/firebase-semester.service';
import { Observable } from 'rxjs';
import { SemesterDTO } from '../../../application/ports/secondary/semester.dto';
import { SubjectDTO } from '../../../application/ports/secondary/subject.dto';
@Component({ 
    selector: 'lib-semester', 
    templateUrl: './semester.component.html', 
    imports: [CommonModule, RouterLink],
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush ,
    standalone: true})
export class SemesterComponent {
    constructor(private router: Router , private activatedRoute: ActivatedRoute) {}
    private subjectService = inject(FirebaseSubjectService);
    private semesterService = inject(FirebaseSemesterService);
    subjects$!: Observable<SubjectDTO[]>
    SemesterID = "";
    semester$!: Observable<SemesterDTO>;
    ngOnInit(): void {
        this.SemesterID=this.activatedRoute.snapshot.paramMap.get('semesterId')!;
        this.subjects$= this.subjectService.getSubjects(this.SemesterID);
        this.getSemester()
    }
    addSubject(SubjectName: string) {
        this.subjectService.addSubject(SubjectName, this.SemesterID);
    }
    editSubject(SubjectID: string, newNote: string) {
    
    this.subjectService.editSubject(this.SemesterID,SubjectID, newNote);
  }
    deleteSubject(SubjectID: string) {
    this.subjectService.deleteSubject(this.SemesterID, SubjectID );
  }
    getSemester() {
        this.semester$=this.semesterService.getSemesterById(this.SemesterID)
    }
    
}
