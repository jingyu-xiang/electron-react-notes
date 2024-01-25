import { NoteInfo } from "@shared/model"
import { notesMock } from "../mocks"
import { atom } from "jotai"

export const notesAtom = atom<NoteInfo[]>(notesMock)

export const selectedNoteIndexAtom = atom<number | null>(null)

export const selectedNoteAtom = atom((get) => {
  const notes = get(notesAtom)
  const index = get(selectedNoteIndexAtom)

  if (!index) return null

  const selectedNote = notes[index]

  return {
    ...selectedNote,
    content: `Hello from note ${index}`,
  }
})
