"use client"

import Image from "next/image";
import { useState } from "react";
import ImageUploader from "react-images-upload";

const UploadForm = ({
  id,
  label,
  onDrop,
  defaultImage
}: {
  id: string;
  label: string;
  onDrop: any;
  defaultImage?: any;
}) => {

  return (
    <div className="flex w-full flex-col py-2">
      <div className="w-full">
        <label htmlFor="cover" className="block font-bold">
          {label}
          <span className={"text-rose-600"}>*</span>
        </label>
        <ImageUploader
          withIcon={true}
          buttonText={`Choose ${label}`}
          onChange={onDrop}
          imgExtension={[".jpg", ".jpeg", ".gif", ".png", ".avif"]}
          maxFileSize={5242880}
          withPreview={true}
          singleImage={true}
          name={label}
          //   withLabel={true}
          // label={label}
          // defaultImage={defaultImage}
          buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline mt-2"
          errorClass="text-red-600"
          fileContainerStyle={{
            backgroundColor: "#F2F2F2",
            border: "none",
          }}
          fileSizeError="File size is too big. Max 5MB."
          fileTypeError="This file type is not supported."
        />
        {defaultImage &&
          <Image
            src={`/api/images/${defaultImage}`}
            width={800}
            height={200}
            alt="ee"
            className="h-48 w-full"
          />
        }
      </div>
    </div>
  );
};

export default UploadForm;
