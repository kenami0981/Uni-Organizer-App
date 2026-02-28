import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FirebaseNotesService } from '../../secondary/infrastructure/firebase-notes.service';
import { CommonModule } from '@angular/common';

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

    SemesterID = "";
    SubjectID = ""
    notes$: any;
private route = inject(ActivatedRoute);
    ngOnInit(): void {
        this.SemesterID = this.route.snapshot.paramMap.get('semesterId')!;
        this.SubjectID = this.route.snapshot.paramMap.get('subjectId')!;
        this.notes$ = this.notesService.getNotes(
    this.SemesterID,
    this.SubjectID
  );  
    }
    addNote(value: string) {
    this.notesService.addNote(value, "note", this.SemesterID, this.SubjectID)
    }
}
