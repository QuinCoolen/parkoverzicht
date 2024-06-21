import { Divider, Input } from "@nextui-org/react"
import { AccountInputProps } from "../../types/account"

export const AccountInput = (props: AccountInputProps) => {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        {props.icon}
        <Input type={props.type} {...props.register(props.type)} variant="underlined" label={props.label} color="primary" defaultValue={props.value} isReadOnly={props.isReadOnly} className="w-fit" classNames={{ inputWrapper: ["border-none shadow-none"] }} />
      </div>
      <Divider />
    </>
  )
}