import { cn } from "../../util"
import { Ui } from "../ui"
import { LuFileSignature } from "react-icons/lu"
import { FaRegTrashAlt } from "react-icons/fa"
import { ComponentProps } from "react"

export function ActionButtonRow({
  className,
  ...rest
}: ComponentProps<"div">): JSX.Element {
  return (
    <div className={cn("flex justify-between", className)} {...rest}>
      <Ui.ActionButton>
        <LuFileSignature className={cn("w-4 h-4 text-zinc-300")} />
      </Ui.ActionButton>
      <Ui.ActionButton>
        <FaRegTrashAlt className={cn("w-4 h-4 text-zinc-300")} />
      </Ui.ActionButton>
    </div>
  )
}
