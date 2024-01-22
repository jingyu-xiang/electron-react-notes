import { ComponentProps } from "react"
import { cn } from "@renderer/util"
export function Sidebar({
  className,
  children,
  ...rest
}: ComponentProps<"aside">): JSX.Element {
  return (
    <aside
      className={cn(
        "pt-8 bg-zinc-800/95 w-[250px]  h-[100vh + 10px] overflow-auto px-2.5",
        className,
      )}
      {...rest}
    >
      {children}
    </aside>
  )
}
