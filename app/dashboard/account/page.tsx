'use client'

import { EditIcon, EmailIcon, PasswordIcon, PhoneIcon } from "../../../components/icons";
import { Avatar, Button, Divider } from "@nextui-org/react";
import { AccountInput } from "../../../components/account/input";
import { useState } from "react";
import { AccountData, InputType } from "../../../types/account";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AccountPage() {
  const [readOnly, setReadOnly] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AccountData>()


  const onSubmit: SubmitHandler<AccountData> = (data) => console.log(data)

  return (
    <form className="flex flex-col gap-4 w-2/5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center gap-4">
          <Avatar size="lg" className="w-24 h-24" name="Janice de Vries" classNames={{ name: "text-3xl text-white", base: "bg-tvblue" }} />
          <p>Janice de Vries</p>
        </div>
        <EditIcon onClick={() => setReadOnly(false)} />
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <AccountInput
          register={register}
          name="phone"
          label="Phone Number"
          value="0612345678"
          type={InputType.PHONE}
          isReadOnly={readOnly}
          icon={<PhoneIcon className="bg-tvblue text-white rounded-full p-2" />}
        />
        <AccountInput
          register={register}
          name="email"
          label="Email Address"
          value="janice.devries@toverland.nl"
          type={InputType.EMAIL}
          isReadOnly={readOnly}
          icon={<EmailIcon className="bg-tvblue text-white rounded-full p-2" />}
        />
        <AccountInput
          register={register}
          name="password"
          label="Password"
          value="admin123"
          type={InputType.PASSWORD}
          isReadOnly={readOnly}
          icon={<PasswordIcon className="bg-tvblue text-white rounded-full p-2" />}
        />
      </div>

      <Button type="submit" variant="ghost" color="primary" className="h-10 rounded-full md:w-24 md:ml-auto">Save</Button>
    </form>
  );
}
