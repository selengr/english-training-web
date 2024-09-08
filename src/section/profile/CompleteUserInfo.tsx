'use client'

import * as z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import UploadForm from "@/components/uploader/page";


import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"


// -----------------------------------------------

const formSchema = z.object({
    jobTitle: z.string().min(2, {
        message: "Job title must be at least 2 characters.",
    }),
    jobDescription: z.string().min(10, {
        message: "Job description must be at least 10 characters.",
    }),
    expertName: z.string().min(2, {
        message: "Expert name must be at least 2 characters.",
    }),
    expertEmail: z.string().email({
        message: "Please enter a valid email address.",
    }),
    instagramId: z.string().min(1, {
        message: "Instagram ID is required.",
    }).regex(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/, {
        message: "Invalid Instagram ID format.",
    }),
    jobCategory: z.string({
        required_error: "Please select a job category.",
    }),
    isUrgent: z.boolean().default(false),
})

// -----------------------------------------------

const CompleteUserInfo = ({ session }: { session: any }) => {
    const { refresh } = useRouter()
    const [uploading, setUploading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            jobTitle: "",
            jobDescription: "",
            expertName: "",
            expertEmail: "",
            instagramId: "",
            jobCategory: "",
            isUrgent: false,
        },
    })

    const {
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        defaultValues: {},
    });



    const onDrop = async (file: any) => {
        if (!file) return

        const formData = new FormData()
        formData.append('image', file[0])

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                const data = await response.json()
                await updateUserImage(data.id)
            } else {
                console.error('Failed to upload image')
            }
        } catch (error: any) {
            toast({
                description: error.message
            })
        }
        finally {
            setUploading(false)

        }

        async function updateUserImage(newImageUrl: string) {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newImageUrl }),
            })

            if (!response.ok) {
                const error = await response.json()
                toast({
                    description: error.message
                })
            }

            refresh()
            return response.json()
        }

    }




    // const onDrop = async (pictureFiles: any, field: "cover" | "banner") => {
    //     // if (field === "cover") setCoverPicture(pictureFiles);

    //     const response = await fetch(
    //         `/api/avatar/upload?filename=${pictureFiles[0].name}`,
    //         {
    //             method: 'POST',
    //             body: pictureFiles[0],
    //         },
    //     );

    //     const newBlob = (await response.json()) as PutBlobResult;


    //     async function updateUserImage(newImageUrl: string) {
    //         const response = await fetch('/api/profile', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ newImageUrl }),
    //         })

    //         if (!response.ok) {
    //             const error = await response.json()
    //             toast({
    //                 description: error.message
    //             })
    //         }

    //         refresh()
    //         return response.json()
    //     }
    //     await updateUserImage(newBlob.url)
    // };


    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            console.log(values)
            toast({
                title: "Form submitted",
                description: "The admin job form has been successfully submitted.",
            })
            form.reset()
        }, 2000)
    }


    return (
        <div className="w-full flex flex-col justify-start items-center px-8">







            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="max-w-lg">

                        <UploadForm
                            id={"cover"}
                            onDrop={(e: File[]) => onDrop(e)}
                            label={"Profile Image "}
                        />

                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="jobTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job Title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Senior Developer" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="expertise"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Area of Expertise</FormLabel>
                                    <FormControl>
                                        <Input placeholder="React, Node.js, etc." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="instagramId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Instagram ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="@johndoe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" {...field} />
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
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            I agree to the terms and conditions
                                        </FormLabel>
                                        <FormDescription>
                                            You agree to our Terms of Service and Privacy Policy.
                                        </FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit Job"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div >
    );
}

export default CompleteUserInfo;