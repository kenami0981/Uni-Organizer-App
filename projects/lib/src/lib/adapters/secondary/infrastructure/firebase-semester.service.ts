import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, query, orderBy, deleteDoc, doc, getDocs, updateDoc, getDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SemesterDTO } from '../../../application/ports/secondary/semester.dto';

@Injectable({
  providedIn: 'root',
})
export class FirebaseSemesterService {
  private firestore = inject(Firestore);
  private semestersRef = collection(this.firestore, 'semesters');
  semesterRef: any;
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
editSemester(semesterID: string, newName: string) {
    updateDoc(doc(this.firestore,'semesters/'+semesterID), {
      name: newName,
    });
  }
  getSemesterById(semesterID: string): Observable<SemesterDTO> {
      this.semesterRef = doc(this.firestore,'semesters/'+semesterID);
      return docData(this.semesterRef,{
        idField: 'id',
      })as Observable<SemesterDTO>;

    }
  async deleteSemester(semesterID: string) {
    const subjectRef = collection(this.firestore,'semesters/'+semesterID+'/subjects');
    const snapshot = await getDocs(subjectRef);
    const deletions = snapshot.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deletions);
    deleteDoc(doc(this.firestore, 'semesters/'+semesterID));  }
}
