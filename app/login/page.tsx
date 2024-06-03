'use client'

import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form"

type FormData = {
  email: string
  password: string
}

export default function LoginPage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => router.push('/dashboard')

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
