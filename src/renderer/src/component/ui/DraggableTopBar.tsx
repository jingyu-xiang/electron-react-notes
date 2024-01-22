import { ComponentProps } from "react"
import { cn } from "@renderer/util"

export function DraggableTopBar({
  className,
  ...rest
}: ComponentProps<"header">): JSX.Element {
  return (
    <header
      {...rest}
      className={cn(
        "absolute inset-0 h-8 bg-transparent border-4 border-transparent",
        className,
      )}
    />
  )
}
