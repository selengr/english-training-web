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



    const [pictures, setPictures] = useState<File[]>([]);
    const [tags, setTags] = useState([]);

    function handleAddTag(e) {
        // e.key === "Enter" && 
      if (e.key === "Enter" && e.target.value !== "") {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  
    function handleRemoveTag(index) {
      const newTags = [...tags];
      newTags.splice(index, 1);
      setTags(newTags);
    }


    const onDrop = (pictureFiles: File[],field :string) => {
        setPictures([...pictures, ...pictureFiles]);
    };


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('introduction', data.introduction);
            formData.append('introduction', data.body);
            formData.append('information.author', data.information.author);
            formData.append('information.publicationDate', data.information.publicationDate);
            formData.append('information.source', data.information.source);
            formData.append('information.content', data.information.content);
            formData.append('point', data.point);
            formData.append('tips', data.tips);
            formData.append('mainIdea', data.mainIdea);
            formData.append('extraInformation', data.extraInformation);
            formData.append('cultureNotes', data.cultureNotes);
            formData.append('outline', data.outline);
            formData.append('tags', data.tags);
            formData.append('conclusion', data.conclusion);
            formData.append('callToAction', data.callToAction);
            formData.append('slug', data.slug);
            formData.append('metadata', data.metadata);
            formData.append('languageLevel', data.languageLevel);
            formData.append('learningObjective', data.learningObjective);
            formData.append('vocabularyFocus', data.vocabularyFocus);

            // formData.append('coverImage', coverImage);
            // formData.append('bannerImage', bannerImage);
            formData.append('cover', pictures[1] as File);
            formData.append('banner', pictures[0] as File);
            debugger
            const response = await axios.post('http://localhost:8000/api/post/create', formData);
            console.log(response.data);
    
        } catch (error) {
            console.error(error);
        }
    };
    


    // const onSubmit = async (data) => {
     
    //         mydata.append('cover', pictures[1] as File);
    //         mydata.append('banner', pictures[0] as File);

    //         const config = {
    //             method: 'post',
    //             url: 'http://localhost:8000/api/post/create',
    //             data: mydata,
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //         axios.request(config)
    //             .then((res) => {
    //                 console.log(res)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    // };


    return (
        <>

            <div className={"mt-5"} />

            <div className="w-[70%] mx-auto py-12 px-6">
                <h1 className="text-3xl font-bold mb-8 overflow-hidden">Create a New Post</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <UploadForm onDrop={(e)=>onDrop(e,'image')} lable={"Cover Image ( author picture )"} />
                    <UploadForm onDrop={(e)=>onDrop(e,'banner')} lable={"Banner Image"} />


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




                    <div className={"w-100"}>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="mainIdea">
                            Main Idea
                             <span className={"text-rose-600"}>*</span>
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
                        <label className="block text-gray-700 font-bold mt-2" htmlFor="tags">
                            tags 
                             <span className={"text-rose-600"}>*</span>
                            <span className="text-xs text-gray-400">(these tags will indicate your covered subject,like,html,css,js)</span>
                        </label>

                        
                            <div className="flex flex-wrap">
                                {tags.map((tag, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-600  hover:bg-gray-800  text-white rounded-full cursor-pointer px-4 m-1 py-1 mt-3"
                                                    onClick={() => handleRemoveTag(index)}
                                                >
                                                    {tag}
                                                </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center mb-2">
                                            <input
                                                    type="text"
                                                    id="tags"
                                                    name="tags"
                                                    className="shadow w[100%] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter a tag and press Enter"
                                                    onKeyDown={handleAddTag}
                                                />
                                                    {/* <input
                                                        type="text"
                                                        id="tags"
                                                        name="tags"
                                                        className="shadow w[100%] appearance-none border rounded-l-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholder="Enter a tag"
                                                        onKeyDown={handleAddTag}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-md px-4 py-2"
                                                        onClick={handleAddTag}
                                                    >
                                                    +
                                                </button> */}
                            </div>

                    </div>

                 


                    <div>
                        <label htmlFor="body" className="block text-lg font-semibold mb-2"> body
                        </label>
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








      


   
                    <div className="flex sm:flex-row flex-col mt-6 w-full">
                         <div className="flex flex-col sm:w-[49%] w-full">
                            <label htmlFor="author" className="block text-lg font-semibold mb-2">
                                 author <span className={"text-rose-600"}>*</span>
                                 <span className="text-xs text-gray-400">name</span>
                            </label>
                            <input
                                id="author"
                                type="text"
                                className="border border-gray-400 rounded-lg px-4 py-2 mx-2 "
                                {...register("information.author")}
                            />
                            </div>
                            {/* <div className="flex flex-col sm:w-[49%] w-full">
                             <label htmlFor="publicationDate" className="block text-lg font-semibold mb-2">
                                publicationDate 
                            </label>
                            <input
                                id="publicationDate"
                                type="text"
                                className="border border-gray-400 rounded-lg px-4  mx-2 py-2 "
                                {...register("information.publicationDate")}
                            />

</div> */}
</div>
<div className="flex sm:flex-row flex-col w-full mt-10">
    
<div className="flex flex-col sm:w-[49%] w-full">
                             <label htmlFor="social" className="block text-lg font-semibold mb-2">
                                 social media <span className={"text-rose-600"}>*</span>
                            </label>
                            <input
                                id="social"
                                type="text"
                                className="border border-gray-400 rounded-lg px-4 py-2  mx-2"
                                {...register("information.source")}
                            />
</div>
<div className="flex flex-col sm:w-[49%] w-full">
                              <label htmlFor="social" className="block text-lg font-semibold mb-2">
                                 your summary  <span className="text-xs">if you wish</span>
                            </label>
                            <textarea
                                id="information"
                                name="information"
                                rows={3}
                                className="shadow w[100%] appearance-none border rounded  mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter the information of your post"
                                {...register("information.content", { required: true })}
                            ></textarea>
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
