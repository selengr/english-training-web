'use client'

import React from "react";
// import Head from "next/head";
import Link from "next/link";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from "yup";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

const Login = () => {
    const router = useRouter()


      const handleSubmit = async(values) => {
        try {
            const url = '/api/auth/login';
            const options = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            };
            
            const response = await fetch(url, options);
            const data = await response.json();
            
            Cookies.set('token', data.token);
            Cookies.set('username', data.username);

            if(data.token) {
                
                if (data.status === 302) {
                    router.push("/auth/verify")
                }else {
                    router.push("/")
                }
               
            }
          } catch (error) {
            console.error(error);
          }
    };

    return (
        <>
            <Head>
               <title>login</title>
            </Head>
            <div className="min-h-screen bg-gray-100 flex justify-center items-center" >
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" >
                    <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => {
                            // const emailClassName = `w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-my-border focus:border-my-border ${
                            //     errors.email && touched.email ? "border-red-500" : "border-gray-300"
                            // }`;
                            // const passwordClassName = `w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-my-border focus:border-my-border ${
                            //     errors.password && touched.password ? "border-red-500" : "border-gray-300"
                            // }`;

                            return (
                                <Form>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="email"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Email
                                        </label>
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            className={`
                                            ${
                                                errors.email && touched.email
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } w-full px-3 py-2 text-gray-700 placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border  `}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="password"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            Password
                                        </label>
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Password"
                                            className={`${
                                                errors.password && touched.password
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                            w-full px-3 py-2 text-gray-700 placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border 
                                            `}
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>
                                  <div className="flex justify-between">
                                  <button
                                        type="submit"
                                        className="bg-my-dark opacity-90 text-white px-4 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus:border-my-border"
                                    >
                                        Login
                                    </button>

                                    <Link href="register" className="text-sm bottom-0 hover:border-b-2 border-slate-800  mt-3 " >
                                         Create Account
                                    </Link>
                                  </div>
                                </Form>
                            );
                        }}
                    </Formik>
                    {/*<p className="mt-4 text-center">*/}
                    {/*    Don't have an account?{" "}*/}
                    {/*    <Link href="/auth/register">*/}
                    {/*        <a className="underline bg-my-dark-600">Register</a>*/}
                    {/*    </Link>*/}
                    {/*</p>*/}
                </div>
            </div>
        </>
    );
};

export default Login;
