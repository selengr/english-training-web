import { useState } from 'react';
import ImageUploader from 'react-images-upload';

const UploadForm = (props) => {
    console.log(props)
    const [pictures, setPictures] = useState<File[]>([]);



    return (
        <div className="flex w-full flex-col py-2">


                <div className="w-full">
                    <label htmlFor="cover" className="block font-bold">
                        {props.lable}
                        <span className={"text-rose-600"}>*</span>
                    </label>
                    <ImageUploader
                        withIcon={true}
                        buttonText="Choose cover image"
                        onChange={props.onDrop}
                        imgExtension={['.jpg', '.jpeg', '.gif', '.png']}
                        maxFileSize={5242880}
                        withPreview={true}
                        singleImage={true}
                        name={props.lable}
                        label=""
                        buttonClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline mt-2"
                        errorClass="text-red-600"
                        fileContainerStyle={{
                            backgroundColor: '#F2F2F2',
                            border: 'none',
                        }}
                        fileSizeError="File size is too big. Max 5MB."
                        fileTypeError="This file type is not supported."
                    />
                </div>


        </div>
    );
};

export default UploadForm;
