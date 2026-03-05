import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FirebaseNotesService } from '../../secondary/infrastructure/firebase-notes.service';
import { CommonModule } from '@angular/common';
import { SubjectDTO } from '../../../application/ports/secondary/subject.dto';
import { Observable } from 'rxjs';
import { FirebaseSubjectService } from '../../secondary/infrastructure/firebase-subject.service';

@Component({ 
    selector: 'lib-subject', 
    templateUrl: './subject.component.html', 
    encapsulation: ViewEncapsulation.None, 
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true })
export class SubjectComponent {
    constructor(private router: Router,
        private notesService: FirebaseNotesService,
        
     ) {}
private subjectService = inject(FirebaseSubjectService);
    SemesterID = "";
    SubjectID = ""
    notes$: any;
    subject$!: Observable<SubjectDTO>;
private route = inject(ActivatedRoute);
    ngOnInit(): void {
        this.SemesterID = this.route.snapshot.paramMap.get('semesterId')!;
        this.SubjectID = this.route.snapshot.paramMap.get('subjectId')!;
        this.getSubject()
        this.notes$ = this.notesService.getNotes(
    this.SemesterID,
    this.SubjectID
  );  
  
    }
    addNote(value: string) {
    this.notesService.addNote(value, "note", this.SemesterID, this.SubjectID)
    }
    deleteNote(noteID: string) {
    this.notesService.deleteNote(this.SemesterID, this.SubjectID,noteID);
  }
  editNote(noteID: string, newNote: string) {
    
    this.notesService.editNote(this.SemesterID, this.SubjectID,noteID, newNote);
  }
  getSubject() {
        this.subject$=this.subjectService.getSubjectById(this.SemesterID, this.SubjectID)
    }
}
