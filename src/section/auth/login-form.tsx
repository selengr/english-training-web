// 'use client';


// import { signIn } from 'next-auth/react';
// import { CheckUserEmail } from '../../../actions/auth-action';

// import Link from "next/link"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { useFormStatus } from 'react-dom';
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { toast } from '@/components/ui/use-toast';
// import SubmitButton from '../ui/ submit-button';
// // import { useTransition } from 'react';

// const LoginForm = () => {


//   return (
//     <form
//       action={async (formdata) => {
//         const email = formdata.get('email');
//         const password = formdata.get('password');
//         const res = await CheckUserEmail(formdata);
//         if (!res?.success) {
//           toast({
//             description: res?.error,
//           })
//         } else {
//           signIn('credentials', {
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
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>
//             Enter your email below to login to your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4">
//             <div className="grid gap-2 mt-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2 mt-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 {/* <Link href="#" className="ml-auto inline-block text-sm underline">
//                   Forgot your password?
//                 </Link> */}
//               </div>
//               <Input id="password" name="password" type="password" required />
//             </div>

//             <SubmitButton text='Login' />
//             {/* <Button variant="outline" className="w-full">
//               Login with Google
//             </Button> */}
//           </div>
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="/auth/register" className="underline">
//               Sign up
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </form>
//   )
// }



// export default LoginForm;







'use client';

import Link from "next/link"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { signIn } from 'next-auth/react';
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckUserEmail } from '../../../actions/auth-action';


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
import { Label } from "@/components/ui/label"
import { toast } from '@/components/ui/use-toast';
import SubmitButton from '../ui/ submit-button';


// ----------------------------------------------------------------
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

type LoginFormValues = z.infer<typeof loginSchema>
// ----------------------------------------------------------------




const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })



  async function onSubmit(data: LoginFormValues) {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    const res = await CheckUserEmail(formData)
    if (!res?.success) {
      toast({
        description: res?.error,
      })
    } else {
      signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      })
    }
  }


  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">


            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="m@example.com" {...field} />
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
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                  <Link href="/auth/forgot-password" className="text-sm text-right underline">
                    Forgot password?
                  </Link>
                </FormItem>
              )}
            />

            <SubmitButton text='Login' />
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}

          </form>
        </Form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}



export default LoginForm;