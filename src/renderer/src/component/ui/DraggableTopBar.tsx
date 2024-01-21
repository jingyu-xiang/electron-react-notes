import { ComponentProps } from "react"
import { cn } from "../../util"

export function DraggableTopBar({
  ...rest
}: ComponentProps<"header">): JSX.Element {
  return (
    <header
      {...rest}
      className={cn(
        "absolute inset-0 h-8 bg-transparent border-4 border-transparent",
      )}
    />
  )
}
