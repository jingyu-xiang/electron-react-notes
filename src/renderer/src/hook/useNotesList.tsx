import { useAtom, useAtomValue } from "jotai"
import { notesAtom, selectedNoteIndexAtom } from "../store"

type Params = {
  onSelect?: (idx: number) => void
}

export function useNotesList({ onSelect }: Params) {
  const notes = useAtomValue(notesAtom)
  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(
    selectedNoteIndexAtom,
  )

  const createSelectHandler = (idx: number) => async () => {
    setSelectedNoteIndex(idx)
    onSelect?.(idx)
  }

  return {
    notes,
    selectedNoteIndex,
    createSelectHandler,
  }
}
