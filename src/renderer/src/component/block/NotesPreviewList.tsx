import { notesMock } from "@renderer/mocks"
import { ComponentProps } from "react"
import { NoteInfo } from "@shared/modal"
import { cn, formatMs } from "@renderer/util"

type NotePreviewProps = Omit<NoteInfo, "lastEdited"> & {
  isActive?: boolean
  lastEdited: string
} & ComponentProps<"div">

function NotePreview({
  title,
  lastEdited,
  isActive = false,
  className,
  ...props
}: NotePreviewProps): JSX.Element {
  return (
    <div
      className={cn(
        "px-2.5 py-3 cursor-pointer rounded-md transition-colors duration-75",
        { "bg-zinc-400/75": isActive, "hover:bg-zinc-500/75": !isActive },
        className,
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full text-xs font-light text-left">
        {lastEdited}
      </span>
    </div>
  )
}

export function NotesPreviewList({
  ...rest
}: ComponentProps<"ul">): JSX.Element {
  if (notesMock.length === 0) {
    return (
      <ul className={cn("text-center pt-4")} {...rest}>
        <span>No notes yet</span>
      </ul>
    )
  }

  return (
    <ul className={cn("mt-3 space-y-1")} {...rest}>
      {notesMock.map((note) => (
        <NotePreview
          key={id(note)}
          title={note.title}
          lastEdited={formatMs(note.lastEdited)}
        />
      ))}
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
