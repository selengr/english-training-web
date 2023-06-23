'use client'
import Image from "next/image";
import Layout from "../layout";
import { HeroHeader } from "@/components/custom/hero-header";
import Banner from "@/components/banner";
import Header from "@/components/header";


const About = () => {

    return (
        <>

            <Header />
            <Banner data={ "its me"} /> 

            <div className="flex justify-center items-center flex-col">
                     {/* Your page content goes here */}

                 {/* <HeroHeader /> */}
                     <h1>hi</h1>
                     <h1>it is me</h1>
                     <h1>very soon...</h1>
                     <h1>winter is comming</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
                     <h1>bla bla bla bla</h1>
            
               {/* ddd   */}
               
               {/* <Image
                src={mageData.src}
                alt="Pic"
                width={1500}
                height={1000}
            /> */}

            
            </div>
           
        </>
    );
}


// function getLayout(page, props) {
//     // Check if the current page is the child page
//     const isChildPage = page.name === 'About';
  
//     // Return only the content defined within the child page component if it's the child page
//     if (isChildPage) {
//       return <>{props.children}</>;
//     }
  
//     // Otherwise, return the ParentLayout component
//     return <Layout {...props}>{props.children}</Layout>;
//   }
  
//   // Attach the getLayout function to the ChildPage component
//   About.getLayout = getLayout;
  
 
export default About;