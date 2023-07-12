'use client'
import { HeroHeader } from "@/components/custom/hero-header";
import Banner from "@/components/banner";
import Header from "@/components/header";


const About = () => {

    return (
        <>
  
            <Header />
            <Banner data={ "its me"} title={"rezakarbakhsh.ir"} /> 
 <div className="w-full">


            <div className="flex justify-center items-center flex-col max-w-[60%] m-auto">
                     {/* Your page content goes here */}

                 {/* <HeroHeader /> */}
                 {/* <div>
                 Hello World 👋
                 </div> */}

<br ></br>  
<br ></br>  

            <div className="mockup-code">
                <pre data-prefix=">" className="text-warning"><code>welecom...</code></pre> 
                <pre data-prefix=">" className="text-success"><code>first thing first; let me introduce myself</code></pre>
                <pre data-prefix="👋"><code>hi there my name is reza and i am glad to see you</code></pre>
            </div>

<br ></br>
<br ></br>


                 <div className="flex w-full">
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">i am in the mid twenties</div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">this web site is for you people</div>
                     </div>


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