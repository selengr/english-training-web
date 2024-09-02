'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import UploadForm from "@/components/uploader/page";
import { onUpload } from "./image-upload";
import { PutBlobResult } from "@vercel/blob";
// import { yupResolver } from "@hookform/resolvers/yup";

const CompleteUserInfo = () => {
    const [coverPicture, setCoverPicture] = useState<any>([]);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);



    const {
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        defaultValues: {},
    });



    const onDrop = async (pictureFiles: any, field: "cover" | "banner") => {
        if (field === "cover") setCoverPicture(pictureFiles);
        // onUpload(pictureFiles[0])
        // const file = inputFileRef.current.files[0];

        const response = await fetch(
            `/api/avatar/upload`,
            {
                method: 'POST',
                body: pictureFiles[0],
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            },
        );

        // const newBlob = (await response.json()) as PutBlobResult;

        // setBlob(newBlob);
    };

    const onSubmit = async (data: any) => {
        let body = new FormData();
        body.append("cover", coverPicture[0]);
    };



    return (
        <div className="w-full flex justify-start items-center px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-lg">

                    {blob && (
                        <div>
                            Blob url: <a href={blob.url}>{blob.url}</a>
                        </div>
                    )}

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