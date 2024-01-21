import { ComponentProps, forwardRef } from "react"
import { cn } from "@renderer/util"

export const Content = forwardRef<HTMLDivElement, ComponentProps<"div">>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex-1 h-screen overflow-auto", className)}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

Content.displayName = "Content"
