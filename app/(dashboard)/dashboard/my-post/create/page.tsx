"use client";
// opt
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../../../../styles/globals.css";
import UiButton from "@/components/ui/UiButton";
import { IPInputs } from "@/app/types/dashboard";
import CustomizedSnackbars from "@/utils/snack-bar";
import UploadForm from "@/components/custom/uploader/page";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomField } from "@/components/custom/fields/CustomField";
import { CustomFieldArea } from "@/components/custom/fields/CustomFieldArea";

import ImageUploader from "react-images-upload";

//   const onSubmit = async (data) => {
//     debugger;
//     try {
//       const data = data;
//       data.cover = pictures[1] as File;
//       data.banner = pictures[0] as File;

//       const response = await axios.post(
//         "http://localhost:3000/api/create/post",
//         formData
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

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

const schema = yup.object().shape({
  title: yup.string(),
  introduction: yup.string(),
  information: yup.object({
    author: yup.string(),
    publicationDate: yup.string(),
    source: yup.string(),
    content: yup.string(),
  }),
  point: yup.string(),
  tips: yup.string(),
  mainIdea: yup.string(),
  extraInformation: yup.string(),
  cultureNotes: yup.string(),
  outline: yup.string(),
  tags: yup.string(),
  conclusion: yup.string(),
  callToAction: yup.string(),
  slug: yup.string(),
  likes: yup.string(),
  views: yup.string(),
  status: yup.string(),
  excerpt: yup.string(),
  featuredImage: yup.string(),
  //   categories: yup.array().of(yup.string()),
  categories: yup.string(),
  lastUpdateDate: yup.string(),
  creation: yup.string(),
  comments: yup.string(),
  metadata: yup.string(),
  languageLevel: yup.string(),
  learningObjective: yup.string(),
  vocabularyFocus: yup.string(),
  cover: yup.string(),
  banner: yup.string(),
});

const AddPostForm = ({
  onClose,
  ageHood,
  id,
}: //   edit,
{
  onClose: () => void;
  ageHood: string;
  id: number;
  //   edit: Passenger;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  const [open, setOpen] = useState(false);
  const [coverPicture, setCoverPicture] = useState<File[]>([]);
  const [bannerPicture, setBannerPicture] = useState<File[]>([]);
  const [tags, setTags] = useState<any>([]);

  function handleAddTag(e: any) {
    // e.key === "Enter" &&
    //   if (e.key === "Enter" && e.target.value !== "") {
    // setTags([...tags, e.target.value]);
    setTimeout(() => {
      //   document.querySelector(".c-tags").value = "";
    }, 500);
    // e.target.value = "";
    //   }
  }

  function handleChangeTag(e: { target: { value: any } }) {
    setTags([...tags, e.target.value]);
  }

  function handleRemoveTag(index: number) {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }

  const onDrop = (pictureFiles: File[], field: "cover" | "banner") => {
    if(field === "banner") setBannerPicture(pictureFiles)
    if(field === "cover") setCoverPicture(pictureFiles)
  };

  const onSubmit = async (data: IPInputs) => {
    let body = data
    body.cover = coverPicture
    body.banner = bannerPicture
    body.tags = tags
    console.log('body :>> ', body);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/create/post",
        body
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CustomizedSnackbars
        message="hi reza"
        time={1000}
        setOpen={() => console.log("object testtstststst")}
        className=""
        color="success"
      />

      <div className={"mt-5"} />
      <button onClick={() => setOpen(true)}>click here</button>

      <div className="w-[70%] mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8 overflow-hidden">
          Create a New Post
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <UploadForm
            id={"cover"}
            onDrop={(e: File[]) => onDrop(e, "cover")}
            label={"Cover Image "}
          />
          <UploadForm
            id={"banner"}
            onDrop={(e: File[]) => onDrop(e, "banner")}
            label={"Banner Image"}
          />

          <CustomField
            register={register}
            errors={errors}
            label="Title"
            id="title"
            styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
            placeholder=""
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="Introduction"
            id="introduction"
            styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
            placeholder=""
            required={false}
          />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="Main Idea"
            id="mainIdea"
            styleClass="shadow w[100%] appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the main idea of your post"
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="body"
            id="body"
            styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
            placeholder=""
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="point"
            id="point"
            styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
            placeholder=""
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="tips"
            id="tips"
            styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
            placeholder=""
            required={false}
          />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="More information"
            id="extraInformation"
            styleClass="shadow w[100%] appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the main idea of your post"
            required={false}
          />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="conclusion"
            id="conclusion"
            styleClass="shadow w[100%] appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the main idea of your post"
            required={false}
          />

          <>
            <div className={"w-100"}>
              <label className="block  font-bold mt-2" htmlFor="tags">
                tags
                <span className={"text-rose-600"}>*</span>
                <span className="text-xs text-gray-400">
                  (these tags will indicate your covered
                  subject,like,html,css,js)
                </span>
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
                {/* <input
                                                    type="text"
                                                    id="tags"
                                                    name="tags"
                                                    className="shadow w[100%] appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                                                    placeholder="Enter a tag and press Enter"
                                                    onBlur={handleAddTag}
                                                    {...register("tags")}
                                                /> */}
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  className="c-tags shadow w[100%] appearance-none border rounded-l-md py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter a tag"
                  onBlur={handleChangeTag}
                />
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-blue-700 text-white rounded-r-md px-4 py-2"
                  onClick={handleAddTag}
                >
                  +
                </button>
              </div>
            </div>
          </>

          <div className="flex sm:flex-row flex-col mt-6 w-full">
            <div className="flex flex-col sm:w-[49%] w-full">
              <CustomField
                register={register}
                errors={errors}
                label="author"
                id="information.author"
                styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
                placeholder=""
                required={false}
              />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full mt-10">
            <div className="flex flex-col sm:w-[49%] w-full">
              <CustomField
                register={register}
                errors={errors}
                label="social media"
                id="information.source"
                styleClass="border border-gray-400 rounded-lg px-4 py-2 w-full"
                placeholder=""
                required={false}
              />
            </div>

            <div className="flex flex-col sm:w-[49%] w-full">
              <CustomFieldArea
                register={register}
                errors={errors}
                label="your summary if you wish"
                id="information.content"
                styleClass="shadow w[100%] appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter the main idea of your post"
                required={false}
              />
            </div>
          </div>

          <button
            type="submit"
            // className="w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            className="bg-slate-400 m-6 mb-[32px] hover:bg-ms-btn-green-33 text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
            // text="create post"
          >
            tuuuukjljgg
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;

// ====================================================================================
