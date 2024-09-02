'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import UploadForm from "@/components/uploader/page";
import { onUpload } from "./image-upload";
// import { yupResolver } from "@hookform/resolvers/yup";

const CompleteUserInfo = () => {
    const [coverPicture, setCoverPicture] = useState<any>([]);



    const {
        handleSubmit,
        formState: { errors }
    } = useForm<any>({
        defaultValues: {},
    });



    const onDrop = (pictureFiles: any, field: "cover" | "banner") => {
        if (field === "cover") setCoverPicture(pictureFiles);
        onUpload(pictureFiles[0])
    };

    const onSubmit = async (data: any) => {
        let body = new FormData();
        body.append("cover", coverPicture[0]);


    };


    console.log('coverPicture ----:>> ', coverPicture);



    return (
        <div className="w-full flex justify-start items-center px-8">
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