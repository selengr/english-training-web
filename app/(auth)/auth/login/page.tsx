'use client'

import React from "react";
// import Head from "next/head";
import Link from "next/link";
import {Formik, Field, ErrorMessage, Form} from "formik";
import * as Yup from "yup";
import {Head} from "next/document";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
});

const Login = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            {/*<Head>*/}
            {/*    <title>Login | Your Website Name</title>*/}
            {/*</Head>*/}
            <div className="min-h-screen bg-gray-100 flex justify-center items-center" >
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" >
                    <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={handleSubmit}
                    >
                        {/*{({ errors, touched }) => {*/}
                        {/*    const emailClassName = `w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-my-border focus:border-my-border ${*/}
                        {/*        errors.email && touched.email ? "border-red-500" : "border-gray-300"*/}
                        {/*    }`;*/}
                        {/*    const passwordClassName = `w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:border-my-border focus:border-my-border ${*/}
                        {/*        errors.password && touched.password ? "border-red-500" : "border-gray-300"*/}
                        {/*    }`;*/}
                        {/*    return (*/}
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
                                            className={
                                                // emailClassName
                                            }
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
                                            className={
                                                // passwordClassName
                                            }
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="text-red-500 mt-1 text-sm"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-my-dark text-white px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:border-my-border"
                                    >
                                        Login
                                    </button>
                                </Form>
                        {/*    );*/}
                        {/*}}*/}
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
