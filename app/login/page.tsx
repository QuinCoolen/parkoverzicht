'use client'

import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"
import { AccountData } from "../../types/account";

export default function LoginPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AccountData>()

  const onSubmit: SubmitHandler<AccountData> = async (data) => {
    try {
      const response = await fetch('https://localhost:7191/login', {
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
  }

  return (
    <div>
      <Image src="/tvl_logo.svg" alt="logo" width={350} height={350} />
      <form onSubmit={handleSubmit(onSubmit)} className="py-4 flex flex-col gap-4">
        <Input type="email" placeholder="Email" {...register("email")} classNames={{ inputWrapper: ["rounded-none border border-tvblue bg-transparent h-auto"] }} />
        <Input type="password" placeholder="Password" {...register("password")} endContent={<label className="text-tvblue">Show</label>} classNames={{ inputWrapper: ["rounded-none border border-tvblue bg-transparent h-auto"] }} />
        <Link className="text-tvblue">Forgot password?</Link>
        <Button type="submit" className="bg-tvblue text-white h-10 rounded-full">Login</Button>
      </form>
    </div>
  );
}
