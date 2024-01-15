// 'use client'

import Bio from "@/components/banner/bio";
import "../../styles/globals.css";
import Post from "@/components/banner/post";
import styles from "../../styles/components/banner/banner.module.css"
import Header from "@/components/header";
import Banner from "@/components/banner";
import TemporaryDrawer from "@/components/ui/drawer";
import callApi from "@/services/axios";

// import axios from "axios"
// import useSWR from "swr";

// export const dynamic = 'force-dynamic'


// const fetcher = (url) => axios.post(url).then(res => res.data);
// async function getData() {
//   try {
//     const response = await callApi().get("/api/post")
//     return response
//   } catch (error) {
//     console.log("11111111111111111111111");
//     return error
//   }
// };


export default async function Page() {
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
        <Banner banner={"images/https___s3-us-west-2.avif"} cover={"upload/7550f002-8018-4ac2-bf6f-2130e72b5a26.png"} /> 
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





