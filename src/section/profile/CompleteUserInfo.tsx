'use client'

import * as z from "zod"
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import UploadForm from "@/components/uploader/page";


import { Button } from "@/components/ui/button"
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
import { MultiSelect } from "@/components/multi-select/multi-select";






// -----------------------------------------------

const jobTitles = [
    {
        value: "Life Coach",
        label: "Life Coach"
    },
    {
        value: "Career Coach",
        label: "Career Coach"
    },
    {
        value: "Executive Coach",
        label: "Executive Coach"
    },
    {
        value: "English Teacher",
        label: "English Teacher"
    },
    {
        value: "ESL Instructor",
        label: "ESL Instructor"
    },
    {
        value: "German Language Teacher",
        label: "German Language Teacher"
    },
    {
        value: "French Language Teacher",
        label: "French Language Teacher"
    },
    {
        value: "Spanish Language Teacher",
        label: "Spanish Language Teacher"
    },
    {
        value: "Science Tutor",
        label: "Science Tutor"
    },
    {
        value: "Music Instructor",
        label: "Music Instructor"
    },
    {
        value: "Art Teacher",
        label: "Art Teacher"
    },
    {
        value: "Physical Education Teacher",
        label: "Physical Education Teacher"
    },
    {
        value: "Educational Consultant",
        label: "Educational Consultant"
    },
    {
        value: "Curriculum Developer",
        label: "Curriculum Developer"
    },
    {
        value: "Academic Advisor",
        label: "Academic Advisor"
    },
    {
        value: "School Counselor",
        label: "School Counselor"
    },
    {
        value: "Corporate Trainer",
        label: "Corporate Trainer"
    },
    {
        value: "Leadership Consultant",
        label: "Leadership Consultant"
    },
    {
        value: "Business Consultant",
        label: "Business Consultant"
    },
    {
        value: "Financial Advisor",
        label: "Financial Advisor"
    },
    {
        value: "Wellness Coach",
        label: "Wellness Coach"
    },
    {
        value: "Fitness Trainer",
        label: "Fitness Trainer"
    },
    {
        value: "Nutritionist",
        label: "Nutritionist"
    },
    {
        value: "Psychologist",
        label: "Psychologist"
    },
    {
        value: "Therapist",
        label: "Therapist"
    },
    {
        value: "Social Worker",
        label: "Social Worker"
    },
    {
        value: "Mentor",
        label: "Mentor"
    },
    {
        value: "Career Counselor",
        label: "Career Counselor"
    },
    {
        value: "Software Developer",
        label: "Software Developer"
    },
    {
        value: "Senior Developer",
        label: "Senior Developer"
    },
    {
        value: "Project Manager",
        label: "Project Manager"
    },
    {
        value: "UI/UX Designer",
        label: "UI/UX Designer"
    },
    {
        value: "Data Scientist",
        label: "Data Scientist"
    },
    {
        value: "Product Manager",
        label: "Product Manager"
    },
    {
        value: "QA Engineer",
        label: "QA Engineer"
    },
    {
        value: "System Administrator",
        label: "System Administrator"
    },
    {
        value: "Student",
        label: "Student"
    },
    {
        value: "EFL Tutor",
        label: "EFL Tutor"
    },
    {
        value: "IELTS Trainer",
        label: "IELTS Trainer"
    },
    {
        value: "TOEFL Instructor",
        label: "TOEFL Instructor"
    },
    {
        value: "University Lecturer",
        label: "University Lecturer"
    },
    {
        value: "Professor",
        label: "Professor"
    },
    {
        value: "Research Assistant",
        label: "Research Assistant"
    },
    {
        value: "Teaching Assistant",
        label: "Teaching Assistant"
    },
    {
        value: "Martial Arts Instructor",
        label: "Martial Arts Instructor"
    },
    {
        value: "Dance Teacher",
        label: "Dance Teacher"
    },
    {
        value: "Drama Instructor",
        label: "Drama Instructor"
    },
    {
        value: "Special Education Teacher",
        label: "Special Education Teacher"
    },
    {
        value: "Online Course Creator",
        label: "Online Course Creator"
    },
    {
        value: "Instructional Designer",
        label: "Instructional Designer"
    },
    {
        value: "E-learning Developer",
        label: "E-learning Developer"
    },
    {
        value: "Educational Technology Specialist",
        label: "Educational Technology Specialist"
    },
    {
        value: "Web Developer",
        label: "Web Developer"
    },
    {
        value: "Full Stack Developer",
        label: "Full Stack Developer"
    },
    {
        value: "IT Project Manager",
        label: "IT Project Manager"
    },
    {
        value: "IT Support Specialist",
        label: "IT Support Specialist"
    },
    {
        value: "Cybersecurity Specialist",
        label: "Cybersecurity Specialist"
    },
    {
        value: "IT Consultant",
        label: "IT Consultant"
    },
    {
        value: "CTO (Chief Technology Officer)",
        label: "CTO (Chief Technology Officer)"
    },
    {
        value: "CIO (Chief Information Officer)",
        label: "CIO (Chief Information Officer)"
    },
    {
        value: "Game Developer",
        label: "Game Developer"
    },
    {
        value: "Other",
        label: "Other"
    },
];
// -----------------------------------------------

const formSchema = z.object({
    // job: z.string().min(2, {
    //     message: "Job title must be at least 2 characters.",
    // }),
    expertise: z.string().min(2, {
        message: "Area of expertise must be at least 2 characters.",
    }),
    instagramId: z.string().min(2, {
        message: "Instagram ID must be at least 2 characters.",
    }),
    job: z
        .array(z.string().min(1))
        .min(1)
        .nonempty("Please select at least one Job."),
    // linkedinId: z.string().min(2, {
})

// -----------------------------------------------

const CompleteUserInfo = ({ user }: { user: any }) => {
    const { refresh } = useRouter()
    const [uploading, setUploading] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            expertise: user.expertise || "",
            instagramId: user.instagramId || "",
            job: user.job || []
        },
    })

    const {
        handleSubmit,
        setValue,
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
                setValue("avatar", data.id)
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
            const response = await fetch('/api/profile/avatar', {
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


    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                const errorData = await response.json();
                toast({
                    title: "Error",
                    description: errorData.message || 'Something went wrong',
                    variant: "destructive",
                });
                throw new Error(errorData.message || 'Something went wrong');
            }

            const data = await response.json();

            toast({
                title: "Form submitted",
                description: "Your profile form has been successfully submitted.",
            });

            // form.reset();
            refresh();

            return data;
        } catch (error) {
            console.error('Submission error:', error);
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "An unexpected error occurred",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }


    return (
        <div className="w-full flex flex-col justify-start items-center pb-14 pt-10">


            <div className="w-full max-w-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                        <div className="w-full flex flex-row items-center justify-start">
                            <UploadForm
                                onDrop={(e: File[]) => onDrop(e)}
                                label={`${user.image ? "Update" : "Upload"} avatar`}
                                className="w-52 text-xs"
                                id={user.image}
                            />

                            {user.image &&
                                <Image
                                    src={`/api/images/${user.image}`}
                                    width={100}
                                    height={100}
                                    alt="ee"
                                    className="mx-10 w-28 h-28 rounded-full mt-8"
                                />
                            }

                        </div>
                        {/* 
                        <FormField
                            control={form.control}
                            name="job"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>*Job Title</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a job title" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {jobTitles.map((title) => (
                                                <SelectItem key={title} value={title}>
                                                    {title}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}


                        <FormField
                            control={form.control}
                            name="job"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Job</FormLabel>
                                    <FormControl>
                                        <MultiSelect
                                            options={jobTitles}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            placeholder="Select options"
                                            variant="inverted"
                                            animation={2}
                                            maxCount={3}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Choose your Job.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        <FormField
                            control={form.control}
                            name="expertise"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>*Expertise</FormLabel>
                                    <FormControl>
                                        <Input placeholder="expertise" {...field} />
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
                                    <FormLabel>*Instagram ID</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* <FormField
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
                                    </div>
                                </FormItem>
                            )}
                        /> */}

                        <Button type="submit" disabled={isSubmitting} className="w-44">
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div >
    );
}

export default CompleteUserInfo;