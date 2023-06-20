'use client'

import { Resend } from 'resend';
import React from "react";
// import Head from "next/head";
import Link from "next/link";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from "yup";
import Head from "next/head";
// import { useRouter } from "next/router";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
});

const resend = new Resend('re_123456789');

const Register = () => {
    // const router = useRouter()
    const handleSubmit = async(values) => {
console.log('values :>> ', values);
        const url = '/api/auth/register';

        const data = values
        
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            body: JSON.stringify(data)
          },
          body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch(error => console.error('Error:', error));
        

    };

    return (
        <>
            {/* <Head>
               <title>register</title>
            </Head> */}
            <div className="min-h-screen bg-gray-100 flex justify-center items-center" >
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" >
                    <h1 className="text-2xl font-bold mb-4 text-center">register</h1>
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
                                <Form className="overflow-hidden">


<div className="mb-">
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
                                            } w-full px-3 py-2 placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border  `}
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>


<div className="mb-4">
                                        <label
                                            htmlFor="username"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            username
                                        </label>
                                        <Field
                                            id="username"
                                            name="username"
                                            type="string"
                                            placeholder="username"
                                            className={`
                                            ${
                                                errors.username && touched.username
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            } w-full px-3 py-2 placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border  `}
                                        />
                                        <ErrorMessage
                                            name="username"
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
                                            w-full px-3 py-2 placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border 
                                            `}
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>


                                   
                                    <div className="mb-4">
                                        <label
                                            htmlFor="confirmPassword"
                                            className="block text-gray-700 font-bold mb-2"
                                        >
                                            confirmPassword
                                        </label>
                                        <Field
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="confirmPassword"
                                            className={`${
                                                errors.confirmPassword && touched.confirmPassword
                                                    ? "border-red-500"
                                                    : "border-gray-300"
                                            }
                                            w-full px-3 py-2 font-medium placeholder-gray-400 border  rounded-md focus:outline-none  focus:border-my-border 
                                            `}
                                        />
                                        <ErrorMessage
                                            name="confirmPassword"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>

                                    
                                     {/*  */}
                                   <button type="submit">
                                   register
                                        </button>
                                   <div className="mt-2"/>
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

export default Register;
