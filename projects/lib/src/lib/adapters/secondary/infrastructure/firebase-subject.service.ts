import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp, updateDoc } from '@angular/fire/firestore';
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
  editSubject(semesterID: string, subjectID:string, newName: string) {
    updateDoc(doc(this.firestore,'semesters/'+semesterID+'/subjects/'+subjectID), {
      name: newName,
    });
  }
  async deleteSubject(semesterID: string, subjectID:string) {
    const notesRef = collection(this.firestore,'semesters/'+semesterID+'/subjects/'+subjectID+'/notes');
    const snapshot = await getDocs(notesRef);
    const deletions = snapshot.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deletions);
    deleteDoc(doc(this.firestore, 'semesters/'+semesterID+'/subjects/'+subjectID));  
    }
  }
 

