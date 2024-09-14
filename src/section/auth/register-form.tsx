
'use client';

import * as z from "zod"
import Link from "next/link"
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react';
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateUserAction } from '../../../actions/auth-action';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from '@/components/ui/use-toast';
import SubmitButton from "../ui/ submit-button";
import { useState } from "react";


const registerSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(3, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: RegisterFormValues) {
    const formData = new FormData()
    formData.append('name', data.firstName)
    formData.append('family', data.lastName)
    formData.append('email', data.email)
    formData.append('password', data.password)

    const res: any = await CreateUserAction(formData)
    if (res?.success) {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: "/",
      });
    } else {
      toast({
        variant: "destructive",
        description: res?.error || "An error occurred during registration.",
      })
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md ">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input placeholder="Max" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="Robinson" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="m@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton text='Create an account' />
            {/* <Button type="button" variant="outline" className="w-full" onClick={() => signIn('github')}>
              Sign up with GitHub
            </Button> */}
          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card >
  )
}

export default RegisterForm;

// 'use client';


// import { signIn } from 'next-auth/react';
// import { CreateUserAction } from '../../../actions/auth-action';


// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import SubmitButton from '../ui/ submit-button';

// const RegisterForm = () => {

//   return (
//     <form
//       action={async (formdata) => {
//         const email = formdata.get('email');
//         const password = formdata.get('password');
//         const res = await CreateUserAction(formdata);
//         if (res?.success) {
//           await signIn('credentials', {
//             email,
//             password,
//             callbackUrl: '/',
//           });
//         }
//       }}
//       className='flex w-full'
//     >
//       <Card className="mx-auto w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-xl">Sign Up</CardTitle>
//           <CardDescription>
//             Enter your information to create an account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>

//           <div className="grid gap-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="first-name">First name</Label>
//                 <Input name='name' id="first-name" placeholder="Max" required />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="last-name">Last name</Label>
//                 <Input name='family' id="last-name" placeholder="Robinson" required />
//               </div>
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <Label htmlFor="password">Password</Label>
//               <Input id="password" type="password" name="password" />
//             </div>

//             <SubmitButton text='Create an account' />
//             <Button variant="outline" className="w-full">
//               Sign up with GitHub
//             </Button>
//           </div>
//           <div className="mt-4 text-center text-sm">
//             Already have an account?{" "}
//             <Link href="/auth/login" className="underline">
//               Sign in
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   )
// }

// export default RegisterForm;






