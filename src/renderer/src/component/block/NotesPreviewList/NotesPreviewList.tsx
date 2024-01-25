import { notesMock } from "@renderer/mocks"
import { ComponentProps } from "react"
import { NoteInfo } from "@shared/model"
import { cn, formatMs } from "@renderer/util"
import { useNotesList } from "@renderer/hook"

export function NotesPreviewList({
  ...rest
}: ComponentProps<"ul">): JSX.Element {
  const { selectedNoteIndex, createSelectHandler } = useNotesList({})

  const renderNotePreview = (note: NoteInfo, idx: number) => {
    const { title, lastEdited } = note
    const isActive = idx === selectedNoteIndex
    return (
      <div
        key={id(note)}
        onClick={createSelectHandler(idx)}
        className={cn(
          "px-2.5 py-3 cursor-pointer rounded-md transition-colors duration-300",
          { "bg-zinc-400/75": isActive, "hover:bg-zinc-500/75": !isActive },
        )}
      >
        <h3 className="mb-1 font-bold truncate">{title}</h3>
        <span className="inline-block w-full text-xs font-light text-left">
          {formatMs(lastEdited)}
        </span>
      </div>
    )
  }

  if (notesMock.length === 0) {
    return (
      <ul className={cn("text-center pt-4")} {...rest}>
        <span>No notes yet</span>
      </ul>
    )
  }

  return (
    <ul className={cn("mt-3 space-y-1")} {...rest}>
      {notesMock.map((note, idx) => renderNotePreview(note, idx))}
    </ul>
  )
}

// =========================================
// Helpers
// =========================================

// TODO: use proper id
function id(note: NoteInfo): string {
  return note.title + note.lastEdited
}
