'use client';

import { Avatar, Button, Divider } from '@nextui-org/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  EditIcon,
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
} from '../../../components/icons';
import { AccountInput } from '../../../components/account/input';
import { AccountData, InputType } from '../../../types/account';

export default function AccountPage() {
  const [readOnly, setReadOnly] = useState(true);

  const { register, handleSubmit} = useForm<AccountData>();

  const onSubmit: SubmitHandler<AccountData> = (data) => console.log(data);

  return (
    <form
      className="flex flex-col gap-4 w-2/5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row items-center gap-4">
          <Avatar
            className="w-24 h-24"
            classNames={{ name: 'text-3xl text-white', base: 'bg-tvblue' }}
            name="Janice de Vries"
            size="lg"
          />
          <p>Janice de Vries</p>
        </div>
        <EditIcon onClick={() => setReadOnly(false)} />
      </div>
      <Divider />
      <div className="flex flex-col gap-4">
        <AccountInput
          icon={<PhoneIcon className="bg-tvblue text-white rounded-full p-2" />}
          isReadOnly={readOnly}
          label="Phone Number"
          name="phone"
          register={register}
          type={InputType.PHONE}
          value="0612345678"
        />
        <AccountInput
          icon={<EmailIcon className="bg-tvblue text-white rounded-full p-2" />}
          isReadOnly={readOnly}
          label="Email Address"
          name="email"
          register={register}
          type={InputType.EMAIL}
          value="janice.devries@toverland.nl"
        />
        <AccountInput
          icon={
            <PasswordIcon className="bg-tvblue text-white rounded-full p-2" />
          }
          isReadOnly={readOnly}
          label="Password"
          name="password"
          register={register}
          type={InputType.PASSWORD}
          value="admin123"
        />
      </div>

      <Button
        className="h-10 rounded-full md:w-24 md:ml-auto"
        color="primary"
        type="submit"
        variant="ghost"
      >
        Save
      </Button>
    </form>
  );
}
