import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SubjectDTO } from '../../../application/ports/secondary/subject.dto';

@Injectable({
  providedIn: 'root',
})
export class FirebaseSubjectService {
  private firestore = inject(Firestore);
    private subjectRef: any;
    getSubjects(semesterID: string): Observable<SubjectDTO[]> {
      this.subjectRef = collection(this.firestore, 'semesters/'+semesterID+'/subjects');
      return collectionData(this.subjectRef,{
        idField: 'id',
      }) as Observable<SubjectDTO[]>;
    }
  }
 

