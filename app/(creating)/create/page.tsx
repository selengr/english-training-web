'use client'
import "../../../styles/globals.css";
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import UploadForm from "../../../components/custom/uploader/page";

const CreatePost = () => {
    // const [bannerImage, setBannerImage] = useState<File | null>(null);
    // const [coverImage, setCoverImage] = useState<File | null>(null);
    const { register, handleSubmit } = useForm();

    // const [title, setTitle] = useState('')
    // const [introduction, setIntroduction] = useState('')
    // const [information, setInformation] = useState('')
    // const [point, setPoint] = useState('')
    // const [tips, setTips] = useState('')
    // const [mainIdea, setMainIdea] = useState('');
    // const [extraInformation, setExtraInformation] = useState('');
    // const [conclusion, setConclusion] = useState('');

    const [pictures, setPictures] = useState<File[]>([]);


    //    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //        setTitle(event.target.value)
    //    }
    //    const handleIntroductionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //        setIntroduction(event.target.value)
    //    }
    //    const handlePoint = (event: React.ChangeEvent<HTMLInputElement>) => {
    //        setPoint(event.target.value)
    //    }
    //     const handleTips = (event: React.ChangeEvent<HTMLInputElement>) => {
    //        setTips(event.target.value)
    //    }
    //    const handleMainIdea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //        setMainIdea(event.target.value)
    //    }
    //    const handleExtraInformation = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //        setExtraInformation(event.target.value)
    //    }
    //    const handleConclusion = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //        setConclusion(event.target.value)
    //    }
    // const handleInformationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    //        setInformation(event.target.value)
    //    }

    const onDrop = (pictureFiles: File[]) => {
        setPictures([...pictures, ...pictureFiles]);
    };


    const onSubmit = async (data) => {
        console.log(data)
        try {
            let mydata = new FormData();
            mydata.append('title', data?.title);
            mydata.append('introduction', data?.introduction);
            mydata.append('cover', pictures[1] as File);
            mydata.append('banner', pictures[0] as File);
            mydata.append('main_idea', data?.mainIdea);
            mydata.append('extraInformation', data?.extraInformation);
            mydata.append('conclusion', data?.conclusion);
            mydata.append('information', data?.information);

            const config = {
                method: 'post',
                url: 'http://localhost:8000/api/post/create',
                data: mydata,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            axios.request(config)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>

            <div className={"mt-5"} />

            <div className="max-w-3xl mx-auto py-12 px-6">
                <h1 className="text-3xl font-bold mb-8 overflow-hidden">Create a New Post</h1>
                <form onSubmit={handleSubmit(onSubmit)}>


                    <div>
                        <label htmlFor="title" className="block text-lg font-semibold mb-2">Title
                            <span className={"text-rose-600"}>*</span>
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={title}
                            // onChange={handleTitleChange}
                            {...register("title")}
                        />
                    </div>


                    <div>
                        <label htmlFor="introduction" className="block text-lg font-semibold mb-2">Introduction
                            <span className={"text-rose-600"}>*</span>
                        </label>
                        <input
                            id="introduction"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={introduction}
                            // onChange={handleIntroductionChange}
                            {...register("introduction")}
                        />
                    </div>

                    <UploadForm onDrop={onDrop} lable={"Cover Image"} />
                    <UploadForm onDrop={onDrop} lable={"Banner Image"} />


                    <div>
                        <label htmlFor="information" className="block text-lg font-semibold mb-2"> information
                            <span className={"text-rose-600"}>*</span></label>
                        <input
                            id="information"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={information}
                            // onChange={handleInformationChange}
                            {...register("information")}
                        />
                    </div>

                    <div>
                        <label htmlFor="point" className="block text-lg font-semibold mb-2">point</label>
                        <input
                            id="point"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={point}
                            // onChange={handlePoint}
                            {...register("point")}
                        />
                    </div>

                    <div>
                        <label htmlFor="tips" className="block text-lg font-semibold mb-2">tips</label>
                        <input
                            id="tips"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={tips}
                            // onChange={handleTips}
                            {...register("tips")}
                        />
                    </div>

                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="mainIdea">
                            Main Idea
                        </label>

                        <textarea
                            id="mainIdea"
                            name="mainIdea"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("mainIdea")}
                        // onChange={handleMainIdea}
                        ></textarea>

                    </div>


                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="more-information">
                            More information
                        </label>

                        <textarea
                            id="extraInformation"
                            name="extraInformation"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("extraInformation")}
                        // onChange={handleExtraInformation}
                        ></textarea>

                    </div>


                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="conclusion">
                            conclusion
                        </label>

                        <textarea
                            id="conclusion"
                            name="conclusion"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("conclusion")}
                        // onChange={handleConclusion}
                        ></textarea>

                    </div>



                    <div className="flex justify-end mt-10">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Create Post
                        </button>
                    </div>




                    <div className="underline-container">
  <h1 className="test">READY TO START</h1>
  <div className="light"></div>
</div>



                </form>
            </div>


        </>
    );
};

export default CreatePost;
