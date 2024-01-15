// 'use client'

import Introduction from "../../../../components/blog/introduction";
import styles from "../../../../styles/components/blog/blog.module.css";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import MainIdea from "../../../../components/blog/mainIdea";
import Conclusion from "../../../../components/blog/conclusion";
import Code from "../../../../components/custom/code";

import Layout from "../../layout";
import Header from "@/components/header";
import Banner from "@/components/banner";
import callApi from "@/services/axios";
import { IPInputs } from "@/app/types/dashboard";

async function getData(id: string) {
  try {
    const response = await callApi().get(`/api/post/${id}`);
    return response;
  } catch (error) {
    console.log("error");
  }
}

const Post = async (props) => {
  let {
    params: { id },
  } = props;
  const data: IPInputs | any = await getData(id);

  // console.log("data :>> ", data.banner);

  return (
    <>
      <Header />
      <Banner title={data.title} banner={data.banner} cover={data.cover} />

      <div className={styles["blog-page-master"]}>
        <Introduction updatedAt={data.updatedAt} />
        <div className={styles["landing-article"]}>
          <MainIdea data={data} />
          {/* <Conclusion data={data} /> */}
        <Code data={data}/>
        </div>

      </div>

      {/* </Layout> */}
    </>
  );
};

// function getLayout(page, props) {
//   // Check if the current page is the child page
//   const isChildPage = page.name === "Post";

//   // Return only the content defined within the child page component if it's the child page
//   if (isChildPage) {
//     return <>{props.children}</>;
//   }

//   // Otherwise, return the ParentLayout component
//   return <Layout {...props}>{props.children}</Layout>;
// }

// // Attach the getLayout function to the ChildPage component
// Post.getLayout = getLayout;

export default Post;
