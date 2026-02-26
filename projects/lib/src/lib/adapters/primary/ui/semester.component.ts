import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseSubjectService } from '../../secondary/infrastructure/firebase-subject.service';
import { CommonModule } from '@angular/common';
@Component({ 
    selector: 'lib-semester', 
    templateUrl: './semester.component.html', 
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush ,
    standalone: true})
export class SemesterComponent {
    constructor(private router: Router ) {}
    private subjectService = inject(FirebaseSubjectService);
    path: string = "";
    subjects$: any;
    ngOnInit(): void {
        this.path = this.router.url; 
        this.path =this.path.replace("/semester/","");
        
        this.subjects$ = this.subjectService.getSubjects(this.path);   
    }
    addSubject(SubjectName: string) {
        this.subjectService.addSubject(SubjectName, this.path);
    }
}
