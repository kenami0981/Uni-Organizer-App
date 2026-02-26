import { FieldValue } from "firebase/firestore";

export interface SubjectDTO {
  readonly id: string;
  readonly name: string;
  readonly createdAt: FieldValue;
}
