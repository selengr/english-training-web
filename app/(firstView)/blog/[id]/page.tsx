// 'use client'

import Introduction from '../../../../components/blog/introduction';
import styles from "../../../../styles/components/blog/blog.module.css";
import { useParams,useSearchParams } from 'next/navigation';
import { useRouter, usePathname } from 'next/navigation';
import MainIdea from '../../../../components/blog/mainIdea';
import Conclusion from "../../../../components/blog/conclusion";
import Code from "../../../../components/custom/code";


import Layout from "../../layout";
import Header from '@/components/header';
import Banner from '@/components/banner';
import callApi from '@/services/axios';


async function getData(id:string) {
  try {
    const response = await callApi().get(`/api/post/${id}`)
    return response
  } catch (error) {
    console.log("error");
  }
};



const Post = async (props) => {
  let { params : {id}} = props
  const data = await getData(id)
     



  return (
    <>

{/* <Layout myData={"/images/https___s3-us-west-2.avif"}> */}


        <Header />
        <Banner data={ "/images/https___s3-us-west-2.avif"} /> 
         
         <div className={styles["blog-page-master"]}>

                <Introduction param={id}/>
           <div className={styles["landing-article"]}>
                <MainIdea />
                 <Conclusion />
           </div>

             <Code/>

         </div>

         {/* </Layout> */}
    </>
  )
}



function getLayout(page, props) {
    // Check if the current page is the child page
    const isChildPage = page.name === 'Post';
  
    // Return only the content defined within the child page component if it's the child page
    if (isChildPage) {
      return <>{props.children}</>;
    }
  
    // Otherwise, return the ParentLayout component
    return <Layout {...props}>{props.children}</Layout>;
  }
  
  // Attach the getLayout function to the ChildPage component
  Post.getLayout = getLayout;
  

export default Post