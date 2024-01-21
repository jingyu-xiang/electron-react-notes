import { ComponentProps } from "react"
import { cn } from "@renderer/util"
export function Sidebar({
  className,
  children,
  ...rest
}: ComponentProps<"aside">): JSX.Element {
  return (
    <aside
      className={cn("w-[250px]  h-[100vh + 10px] overflow-auto ", className)}
      {...rest}
    >
      {children}
    </aside>
  )
}
