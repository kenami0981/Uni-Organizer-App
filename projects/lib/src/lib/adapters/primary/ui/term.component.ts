import { Component, ViewEncapsulation, ChangeDetectionStrategy, inject } from '@angular/core';
import { FirebaseSemesterService } from "../../secondary/infrastructure/firebase-semester.service"
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom, Observable } from 'rxjs';
import { SemesterDTO } from '../../../application/ports/secondary/semester.dto';

@Component({ 
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    selector: 'lib-term', 
    templateUrl: './term.component.html', 
    encapsulation: ViewEncapsulation.None, 
    changeDetection: ChangeDetectionStrategy.OnPush })
export class TermComponent {
    private semesterService = inject(FirebaseSemesterService);
    semesters$ = this.semesterService.getSemesters();
    semesterForm!: FormGroup;
    semesterEditForm!: FormGroup;
    editingId: string | null = null;

    constructor(private fb: FormBuilder) {
      this.semesterForm = this.fb.group({
        semester: ['', Validators.required]
      })
      this.semesterEditForm = this.fb.group({
        semesterName: ['', Validators.required]
      })
    }

  addSemester() {
    if (this.semesterForm.invalid) return;
    let value  = this.semesterForm.value.semester;
    this.semesterService.addSemester(value);
    this.changeVisibility(1)
    this.semesterForm.reset();
  }
  editSemesterButton(semester: SemesterDTO) {
    this.editingId = semester.id;
    this.semesterEditForm.patchValue({semesterName: semester.name});
  }
  editSemester(semesterID: string) {
    if (this.semesterEditForm.invalid) return;
    let value = this.semesterEditForm.value.semesterName;
    this.semesterService.editSemester(semesterID, value);
    this.semesterEditForm.reset();
    this.editingId = null;
  }
  deleteSemester(semesterID: string) {
    this.semesterService.deleteSemester(semesterID);
  }
  changeVisibility(num: number) {
    let tab: string[] = ["hidden", "visible"]
    var showAddSemesterBtn = document.getElementById("showAddSemesterBtn")
    var addSemesterForm = document.getElementById("addSemesterForm")
    showAddSemesterBtn!.style.visibility = tab[num]
    addSemesterForm!.style.visibility = tab[(num+1)%2]
    
  }
  
}
