import { ComponentProps } from "react"
import { cn } from "../../util"

export function ActionButton({
  className,
  children,
  ...rest
}: ComponentProps<"button">): JSX.Element {
  return (
    <button
      className={cn(
        "px-2 py-1 rounded-md border border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
