'use client'

// import clientPromise from '../../lib/mongodb'
import Bio from "@/components/banner/bio";
import "../../styles/globals.css";
import Post from "@/components/banner/post";
import styles from "../../styles/components/banner/banner.module.css"
// import Image from "next/image";
// import Link from "next/link";
// import Layout from "./layout";
import Header from "@/components/header";
import Banner from "@/components/banner";
import TemporaryDrawer from "@/components/ui/drawer";
import CarouselLogo from "@/components/ui/carousel/CarouselLogo";
import SwiperSlides from "@/components/ui/carousel/SwiperSlides";

// import axios from "axios"
// import useSWR from "swr";



// const fetcher = (url) => axios.post(url).then(res => res.data);



export default  function Page() {

  // const { data, error } = useSWR('/api/auth/register', fetcher);


  // const handlePost = async () => {
  //   try {
  //     const response = await axios.post('/api/data', { key: 'value' });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (error) return <div>Error loading data</div>;
  // if (!data) return <div>Loading...</div>;


  


  return (
    <>

{/* <Layout myData={"/images/https___s3-us-west-2.avif"}> */}
    <div className="w-full h-full">

    </div>
        <Header />
        <Banner data={ "/images/https___s3-us-west-2.avif"} /> 
        <TemporaryDrawer />

    <div className="w-100 flex justify-center align-middle">
      <article className={styles["landing-article"]}>
              <Bio />
              <Post />
      </article>
    </div>
    {/* </Layout> */}
    {/* <CarouselLogo />
         <SwiperSlides /> */}
    </>
  );
}





