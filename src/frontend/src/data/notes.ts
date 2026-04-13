import type { NoteItem } from "../types";
import { accountsNotes } from "./notesAccounts";
import { bstNotes } from "./notesBST";
import { englishNotes } from "./notesEnglish";
import { gatNotes } from "./notesGAT";
import { mathsNotes } from "./notesMaths";

export const notes: NoteItem[] = [
  ...englishNotes,
  ...bstNotes,
  ...accountsNotes,
  ...mathsNotes,
  ...gatNotes,
];

export const getNotesBySubject = (subject: NoteItem["subject"]): NoteItem[] =>
  notes.filter((n) => n.subject === subject);
