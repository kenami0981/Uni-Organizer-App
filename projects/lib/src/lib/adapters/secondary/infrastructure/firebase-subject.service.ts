import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query, serverTimestamp } from '@angular/fire/firestore';
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
      return collectionData(query(this.subjectRef,orderBy('createdAt', 'asc')),{
        idField: 'id',
      }) as Observable<SubjectDTO[]>;
    }
    addSubject(nameOfSubject: string, semesterID: string) {
    addDoc(collection(this.firestore, 'semesters/'+semesterID+'/subjects'), {
      name: nameOfSubject,
      createdAt: serverTimestamp()
    });
  
  }
  }
 

