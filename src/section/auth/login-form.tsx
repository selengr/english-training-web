'use client';


import { signIn } from 'next-auth/react';
import { CheckUserEmail } from '../../../actions/auth-action';

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from '@/components/ui/use-toast';
import { useTransition } from 'react';

const LoginForm = () => {
  const [pending, startTransaction] = useTransition();


  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await CheckUserEmail(formdata);
        if (!res?.success) {
          toast({
            description: res?.error,
          })
        } else {
          signIn('credentials', {
            email,
            password,
            callbackUrl: '/',
          });
        }
      }}
      className='flex w-full'
    >
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </Link> */}
              </div>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full mt-8" loading={pending}>
              Login
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}



export default LoginForm;