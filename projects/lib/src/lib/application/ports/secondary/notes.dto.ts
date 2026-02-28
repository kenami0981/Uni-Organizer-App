import { FieldValue } from "firebase/firestore";

export interface NotesDTO {
  readonly id: string;
  readonly name: string;
  readonly note: string;
  readonly createdAt: FieldValue;
}
