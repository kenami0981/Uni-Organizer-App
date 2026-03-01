import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseSubjectService } from '../../secondary/infrastructure/firebase-subject.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
    subjects$: any;
    SemesterID = "";
    ngOnInit(): void {
        this.SemesterID=this.activatedRoute.snapshot.paramMap.get('semesterId')!;
        this.subjects$= this.subjectService.getSubjects(this.SemesterID);
    }
    addSubject(SubjectName: string) {
        this.subjectService.addSubject(SubjectName, this.SemesterID);
    }
    deleteSubject(subjectID: string) {
    this.subjectService.deleteSubject(this.SemesterID, subjectID );
  }
    
}
