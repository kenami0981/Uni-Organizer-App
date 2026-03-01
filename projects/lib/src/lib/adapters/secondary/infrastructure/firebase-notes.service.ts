import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, orderBy, query, serverTimestamp } from '@angular/fire/firestore';
import { NotesDTO } from '../../../application/ports/secondary/notes.dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseNotesService {
  private firestore = inject(Firestore);
  private notesRef:any;
  getNotes(semesterID: string, subjectID: string): Observable<NotesDTO[]> {
    this.notesRef = collection(this.firestore, 'semesters/'+semesterID+'/subjects/'+subjectID+'/notes');
    return collectionData(query(this.notesRef, orderBy('createdAt', 'asc')),{
      idField: 'id',
    }) as Observable<NotesDTO[]>;
  }
  addNote(yourNote:string, type: string,semesterID: string, subjectID: string) {
    addDoc(collection(this.firestore, 'semesters/'+semesterID+'/subjects/'+subjectID+'/notes'), {
      name: type,
      note: yourNote,
      createdAt: serverTimestamp()
    });
  
  }
  deleteNote(semesterID: string, subjectID:string, noteID: string) {
    deleteDoc(doc(this.firestore, 'semesters/'+semesterID+'/subjects/'+subjectID+'/notes/'+noteID));  }
  
}
