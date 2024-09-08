'use client'

import * as z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast";
import UploadForm from "@/components/uploader/page";
import { Button } from "@/components/ui/button";



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

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="max-w-lg">


                    <UploadForm
                        id={"cover"}
                        onDrop={(e: File[]) => onDrop(e)}
                        label={"Profile Image "}
                    />


                    {/* <FormLabel>Instagram ID</FormLabel> */}

                </div>

                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Job"}
                </Button>

            </form>
        </div >
    );
}

export default CompleteUserInfo;