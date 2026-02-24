import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SemesterDTO } from '../../../application/ports/secondary/semester.dto';

@Injectable({
  providedIn: 'root',
})
export class FirebaseSemesterService {
  private firestore = inject(Firestore);
  private semestersRef = collection(this.firestore, 'semesters');
  getSemesters(): Observable<SemesterDTO[]> {
    return collectionData(query(this.semestersRef, orderBy('name', 'asc')),{
      idField: 'id',
    }) as Observable<SemesterDTO[]>;
  }
  addSemester(nameOfSemester: string) {
    addDoc(collection(this.firestore, 'semesters'), {
      name: nameOfSemester,
    });
  
  }
}
