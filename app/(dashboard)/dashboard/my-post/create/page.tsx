"use client";
// // opt
import * as yup from "yup";
import { useState } from "react";
import callApi from "@/services/axios";
import { useForm } from "react-hook-form";
import "../../../../../styles/globals.css";
import UiButton from "@/components/ui/UiButton";
import {
  IPInputs,
  LanguageLevel,
  SaveExample,
  tableData,
} from "@/app/types/dashboard";
import CustomizedSnackbars from "@/utils/snack-bar";
import { yupResolver } from "@hookform/resolvers/yup";
import UploadForm from "@/components/custom/uploader/page";
import { CustomField } from "@/components/custom/fields/CustomField";
import { CustomFieldArea } from "@/components/custom/fields/CustomFieldArea";
import UiAccordion from "@/components/ui/accordion/UiAccordion";
import Test from "@/components/test/Test";
import UiCountdown from "@/components/ui/uiCountdown/UiCountdown";
import Header from "@/components/header";
import InputWithButtons from "@/components/custom/input-list/InputList";
import CreateTable from "@/components/custom/input-list/CreateTable";

const schema = yup.object().shape({
  cover: yup.array(),
  banner: yup.array(),
  title: yup.string().required(),
  introduction: yup.string().required(),
  mainIdea: yup.string().required(),
  body: yup.string().required(),
  point: yup.string(),
  tips: yup.string(),
  extraInformation: yup.string(),
  conclusion: yup.string().required(),
  information: yup.object({
    author: yup.string(),
    email: yup.string(),
  }),
  languageLevel: yup.string(),
  tags: yup.string(),
  descriptionLink: yup.string(),
  link: yup.string(),
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

  const [bannerPicture, setBannerPicture] = useState<tableData[]>();
  const [saveExample, setSaveExample] = useState<SaveExample>();
  // const [tableData, settableData] = useState<any>();
  const [tableData, setTableData] = useState([]);
  const [coverPicture, setCoverPicture] = useState<any>([]);
  const [tags, setTags] = useState<any>([]);

  function handleAddTag(e: any) {
    // e.key === "Enter" &&
    //   if (e.key === "Enter" && e.target.value !== "") {
    // setTags([...tags, e.target.value]);
    setTimeout(() => {
      // document.querySelector(".c-tags").value = "";
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

  const onDrop = (pictureFiles: any, field: "cover" | "banner") => {
    if (field === "banner") setBannerPicture(pictureFiles);
    if (field === "cover") setCoverPicture(pictureFiles);
  };

  const onSubmit = async (data: IPInputs) => {
    let body = new FormData();
    let info = {
      author: data.information.author,
      email: data.information.email,
    };
    body.append("cover", coverPicture[0]);
    body.append("banner", bannerPicture[0]);
    body.append("body", data.body);
    body.append("saveExample", JSON.stringify(saveExample));
    body.append("tableData", JSON.stringify(tableData));
    body.append("title", data.title);
    body.append("introduction", data.introduction);
    body.append("mainIdea", data.mainIdea);
    body.append("tags", data.tags);
    body.append("link", data.link);
    body.append("descriptionLink", data.descriptionLink);
    body.append("conclusion", data.conclusion);
    if (data.point) body.append("point", data.point);
    if (data.tips) body.append("tips", data.tips);
    // if (data.information.author||data.information.email)
    body.append("information", JSON.stringify(info));
    // if (data.information.email)
    //   body.append("information.email", data.information.email);
    if (data.languageLevel) body.append("languageLevel", data.languageLevel);
    if (data.extraInformation)
      body.append("extraInformation", data.extraInformation);

    try {
      //   await fetch('/api/create/post', {
      //     method: 'POST',
      //     headers: {
      //         'Content-type': "multipart/form-data",
      //     },
      //     body: body,
      // })

      const response: any = await callApi().post(`/api/post`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
console.log('tableData :>> ', tableData);
  return (
    <>
      <CustomizedSnackbars
        message="hi reza"
        time={1000}
        setOpen={() => console.log("object testtstststst")}
        className=""
        color="success"
      />

      <Header />

      <div className={"mt-5"} />

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
          {/* {errors["cover"] && errors["cover"].type && (
            <p className="text-rose-500 -mt-5">{errors["cover"].message}</p>
          )} */}
          <UploadForm
            id={"banner"}
            onDrop={(e: File[]) => onDrop(e, "banner")}
            label={"Banner Image"}
          />
          {/* {errors["banner"] && errors["banner"].type && (
            <p className="text-rose-500 -mt-5">{errors["banner"].message}</p>
          )} */}

          <CustomField
            register={register}
            errors={errors}
            label="Title"
            id="title"
            styleClass=""
            placeholder=""
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="Introduction"
            id="introduction"
            styleClass=""
            placeholder=""
            required={false}
          />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="Main Idea"
            id="mainIdea"
            placeholder="Enter the main idea of your post"
            required={false}
          />

          {/* <InputListItem
            id={"tabel"}
            label={"Tabel"}
            register={register}
            errors={errors}
            tableData={(e)=>console.log('e :>> ', e)}
          /> */}
          <CreateTable 
          setTableData={setTableData}
          tableData={tableData} />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="Body"
            id="body"
            styleClass=""
            placeholder="Enter the body of your post"
            required={false}
          />

          <InputWithButtons
            id={"example"}
            label={"Example"}
            register={register}
            errors={errors}
            saveExample={(e) => setSaveExample(e)}
          />

          <CustomField
            register={register}
            errors={errors}
            label="point"
            id="point"
            styleClass=""
            placeholder=""
            required={false}
          />

          <CustomField
            register={register}
            errors={errors}
            label="tips"
            id="tips"
            styleClass=""
            placeholder=""
            required={false}
          />

          <CustomFieldArea
            register={register}
            errors={errors}
            label="Extra information"
            id="extraInformation"
            placeholder="Enter the extra information if necessary"
            required={false}
          />

          {/* <UiAccordion /> */}
          {/* <Test />
          <UiCountdown /> */}

          <CustomFieldArea
            register={register}
            errors={errors}
            label="conclusion"
            id="conclusion"
            placeholder="Enter the conclusion of your post"
            required={false}
          />

          <label htmlFor={"level"} className="block text-lg font-semibold mt-1">
            {"level"}
            <span className={"text-rose-600"}>*</span>
          </label>
          <select
            {...register("languageLevel", { required: true })}
            className={`${
              errors["languageLevel"] &&
              "is-invalid bg-ms-white border-ms-crimson border-[1px]"
            } w-[50%] h-10 text-ms-lg border border-gray-400 rounded-lg px-4 py-2 my-2 focus:outline-gray-500  focus:outline-[1px] mb-0`}
          >
            {["A1", "A2", "B1", "B2", "C1", "C2"].map(
              (item: LanguageLevel | string, index: number) => {
                return (
                  <option
                    key={index}
                    className="p-4 font-ms-iranSansMobile m-2 text-ms-lg h-10 space-x-2 space-y-20"
                    value={item}
                  >
                    {item}
                  </option>
                );
              }
            )}
          </select>

          {/* <>
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
                {tags.map((tag:any, index:number) => (
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
          </> */}

          <CustomField
            register={register}
            errors={errors}
            label="Link Description"
            id="descriptionLink"
            placeholder="Description for like blow if it is necessary"
            required={false}
          />
          <CustomField
            register={register}
            errors={errors}
            label="Link URL"
            id="link"
            placeholder="any usefull source related to this information"
            required={false}
          />

          <div className="flex sm:flex-row flex-col mt-6 mb-6 w-full">
            <div className="flex flex-col w-full sm:w-[48%] ">
              <CustomField
                register={register}
                errors={errors}
                label="author"
                id="information.author"
                styleClass=""
                placeholder=""
                required={false}
              />
            </div>

            <div className="flex flex-col w-full sm:w-[49%] mx-1">
              <div className="flex flex-col">
                <CustomField
                  register={register}
                  errors={errors}
                  label="social media or email"
                  id="information.email"
                  styleClass=""
                  placeholder=""
                  required={false}
                />
              </div>

              {/* <div className="flex flex-col sm:w-[49%] w-full">
              <CustomFieldArea
                register={register}
                errors={errors}
                label="your summary if you wish"
                id="information.content"
                placeholder="Enter the main idea of your post"
                required={false}
              />
            </div> */}
            </div>
          </div>

          <UiButton
            type="submit"
            // className="w-[50%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            className="Glass bg-[#3f4257] mt-14 hover:bg-[#3f4240] text-white text-ms-lg h-[50px] w-full border-none text-ms-white font-ms-medium rounded-[15px] bg-ms-btn-green-23"
            // text="create post"
          >
            save post
          </UiButton>
        </form>
      </div>
    </>
  );
};

export default AddPostForm;

// ====================================================================================
