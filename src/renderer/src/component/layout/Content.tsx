import { ComponentProps, forwardRef } from "react"
import { cn } from "@renderer/util"

export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          " bg-zinc-900/95 border-l-white/20 flex-1 border-l h-screen overflow-auto",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Content.displayName = "Content"
