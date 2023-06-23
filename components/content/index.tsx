'use client'
import "../../../styles/globals.css";
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// import UploadForm from "../../../components/custom/uploader/page";

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
                <h1>dwd</h1>
            </div>


        </>
    );
};

export default CreatePost;
