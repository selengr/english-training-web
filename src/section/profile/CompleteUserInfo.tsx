'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { PutBlobResult } from "@vercel/blob";
import { toast } from "@/components/ui/use-toast";
import UploadForm from "@/components/uploader/page";

const CompleteUserInfo = ({ session }: { session: any }) => {
    const { refresh } = useRouter()
    // const [coverPicture, setCoverPicture] = useState<any>([]);

    const {
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        defaultValues: {},
    });



    const onDrop = async (pictureFiles: any, field: "cover" | "banner") => {
        // if (field === "cover") setCoverPicture(pictureFiles);

        const response = await fetch(
            `/api/avatar/upload?filename=${pictureFiles[0].name}`,
            {
                method: 'POST',
                body: pictureFiles[0],
            },
        );

        const newBlob = (await response.json()) as PutBlobResult;


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
        await updateUserImage(newBlob.url)
    };

    const onSubmit = async (data: any) => {
        let body = new FormData();
        // body.append("cover", coverPicture[0]);
    };



    return (
        <div className="w-full flex flex-col justify-start items-center px-8">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-lg">


                    <UploadForm
                        id={"cover"}
                        onDrop={(e: File[]) => onDrop(e, "cover")}
                        label={"Profile Image "}
                    />

                </div>

            </form>
        </div>
    );
}

export default CompleteUserInfo;