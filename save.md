'use client'
import "../../../styles/globals.css";
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import UploadForm from "../../../components/custom/uploader/page";

const CreatePost = () => {
    const { register, handleSubmit } = useForm();
// const [coverImage, setCoverImage] = useState<File | null>(null);
// const [bannerImage, setBannerImage] = useState<File | null>(null);




    const [pictures, setPictures] = useState<File[]>([]);

    const onDrop = (pictureFiles: File[]) => {
        setPictures([...pictures, ...pictureFiles]);
    };


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            //1
            formData.append('title', data.title);
            //2
            formData.append('introduction', data.introduction);
            //3
            formData.append('body', data.information);
            
            //4
            formData.append('point', data.point);
            //5
            formData.append('tips', data.tips);
            //6
            formData.append('mainIdea', data.mainIdea);
            //7
            formData.append('extraInformation', data.extraInformation);
            // formData.append('cultureNotes', data.cultureNotes);
            //8
            formData.append('outline', data.outline);
            //9
            formData.append('tags', data.tags);
            //10
            formData.append('conclusion', data.conclusion);
            //11
            formData.append('callToAction', data.callToAction);
            //12
            formData.append('slug', data.slug);
            //13
            formData.append('metadata', data.metadata);
            //14
            formData.append('languageLevel', data.languageLevel);
            //15
            formData.append('information.author', data.information.author);
            formData.append('information.publicationDate', data.information.publicationDate);
            formData.append('information.source', data.information.source);
            formData.append('information.content', data.information.content);

            formData.append('cover', pictures[1] as File);
            formData.append('banner', pictures[0] as File);


            // formData.append('learningObjective', data.learningObjective);
            // formData.append('vocabularyFocus', data.vocabularyFocus);
            // formData.append('coverImage', coverImage);
            // formData.append('bannerImage', bannerImage);
    
            const response = await axios.post('http://localhost:8000/api/post/create', formData);
            console.log(response.data);

            // const config = {
            //     method: 'post',
            //     url: 'http://localhost:8000/api/post/create',
            //     data: mydata,
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }
            // axios.request(config)
            //     .then((res) => {
            //         console.log(res)
            //     })
            //     .catch((err) => {
            //         console.log(err)
            //     })
    
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
                        <label htmlFor="body" className="block text-lg font-semibold mb-2"> body
                            <span className={"text-rose-600"}>*</span></label>
                        <input
                            id="body"
                            type="text"
                            className="border border-gray-400 rounded-lg px-4 py-2 w-full"
                            // value={body}
                            // onChange={handlebodyChange}
                            {...register("body")}
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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="extraInformation">
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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="outline">
                            outline
                        </label>

                        <textarea
                            id="outline"
                            name="outline"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("outline")}
                        // onChange={handleoutline}
                        ></textarea>

                    </div>




                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="tags">
                            tags
                        </label>

                        <textarea
                            id="tags"
                            name="tags"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("tags")}
                        // onChange={handletags}
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







                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="callToAction">
                            callToAction
                        </label>

                        <textarea
                            id="callToAction"
                            name="callToAction"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("callToAction")}
                        // onChange={handlecallToAction}
                        ></textarea>

                    </div>







                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="slug">
                            slug
                        </label>

                        <textarea
                            id="slug"
                            name="slug"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("slug")}
                        // onChange={handleslug}
                        ></textarea>

                    </div>









                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="metadata">
                            metadata
                        </label>

                        <textarea
                            id="metadata"
                            name="metadata"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("metadata")}
                        // onChange={handlemetadata}
                        ></textarea>

                    </div>





                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="languageLevel">
                            languageLevel
                        </label>

                        <textarea
                            id="languageLevel"
                            name="languageLevel"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("languageLevel")}
                        // onChange={handlelanguageLevel}
                        ></textarea>

                    </div>





                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="metadata">
                            metadata
                        </label>

                        <textarea
                            id="metadata"
                            name="metadata"
                            rows={3}
                            className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the main idea of your post"
                            {...register("metadata")}
                        // onChange={handlemetadata}
                        ></textarea>

                    </div>










{/*                     
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

                    </div> */}


                    <div className="f-full flex flex-row">

                            <div>
                                <label htmlFor="author" className="block text-lg font-semibold mb-2">author</label>
                                <input
                                    id="author"
                                    type="text"
                                    className="border border-gray-400 rounded-lg px-4 py-2 w-48"
                                    // value={tips}
                                    // onChange={handleTips}
                                    {...register("information.author")}
                                />
                            </div>

                            <div>
                                <label htmlFor="author" className="block text-lg font-semibold mb-2">publicationDate</label>
                                <input
                                    id="publicationDate"
                                    type="text"
                                    className="border border-gray-400 rounded-lg px-4 py-2 w-48"
                                    // value={tips}
                                    // onChange={handleTips}
                                    {...register("information.publicationDate")}
                                />
                            </div>

                    </div>




                    <div className="f-full flex flex-row">

                            <div>
                                <label htmlFor="source" className="block text-lg font-semibold mb-2">source</label>
                                <input
                                    id="source"
                                    type="text"
                                    className="border border-gray-400 rounded-lg px-4 py-2 w-48"
                                    // value={tips}
                                    // onChange={handleTips}
                                    {...register("information.source")}
                                />
                            </div>

                            <div>
                                <label htmlFor="content" className="block text-lg font-semibold mb-2">content</label>
                                <input
                                    id="content"
                                    type="text"
                                    className="border border-gray-400 rounded-lg px-4 py-2 w-48"
                                    // value={tips}
                                    // onChange={handleTips}
                                    {...register("information.content")}
                                />
                            </div>

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
