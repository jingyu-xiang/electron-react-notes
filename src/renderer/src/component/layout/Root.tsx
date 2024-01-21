import { ComponentProps } from "react"
import { cn } from "../../util"

export function Root({
  className,
  children,
  ...rest
}: ComponentProps<"main">): JSX.Element {
  return (
    <main className={cn("flex flex-row", className)} {...rest}>
      {children}
    </main>
  )
}
