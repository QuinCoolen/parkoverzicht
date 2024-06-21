'use client';

import { Button, Input, Link } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AccountData } from '../../types/account';

export default function LoginPage() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<AccountData>();

  const onSubmit: SubmitHandler<AccountData> = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const res = await response.json();

      console.log(res);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Image alt="logo" height={350} src="/tvl_logo.svg" width={350} />
      <form
        className="py-4 flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Email"
          type="email"
          {...register('email')}
          classNames={{
            inputWrapper: [
              'rounded-none border border-tvblue bg-transparent h-auto',
            ],
          }}
        />
        <Input
          id='password'
          placeholder="Password"
          type="password"
          {...register('password')}
          classNames={{
            inputWrapper: [
              'rounded-none border border-tvblue bg-transparent h-auto',
            ],
          }}
          endContent={<label htmlFor="password" className="text-tvblue">Show</label>}
        />
        <Link className="text-tvblue">Forgot password?</Link>
        <Button
          className="bg-tvblue text-white h-10 rounded-full"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
