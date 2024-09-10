'use client';


import { signIn } from 'next-auth/react';
import { CreateUserAction } from '../../../actions/auth-action';


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
import SubmitButton from '../ui/ submit-button';

const RegisterForm = () => {

  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await CreateUserAction(formdata);
        if (res?.success) {
          await signIn('credentials', {
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
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input name='name' id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input name='family' id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" name="password" />
            </div>

            <SubmitButton text='Create an account' />
            <Button variant="outline" className="w-full">
              Sign up with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

export default RegisterForm;