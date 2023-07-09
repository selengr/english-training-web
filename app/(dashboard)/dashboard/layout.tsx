"use client";


import {useState} from "react";
import "../../../styles/globals.css";
// export const metadata = {
//   title: 'Next.js',
//   description: 'reza ',
// }
import Header from "@/components/header";
import {useRouter} from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [darkMode, setDarkMode] = useState(false);

  const router = useRouter()

    const handleOpenClick = (event,URL : string) => {
        const target = event.currentTarget;
        router.push(URL ?? "")
        // Remove classes from all menu items
        const menuItems = document.querySelectorAll(".close > div");
        menuItems.forEach((item) => {
          item.classList.remove("bg-gray-100");
          item.classList.remove("text-indigo-600");
        });
      
        // Add classes to the clicked item
        target.classList.add("bg-gray-100");
        target.classList.add("text-indigo-600");
      };
  

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const html = document.querySelector("html");
        if (html.getAttribute("data-theme") === "light") {
            html.setAttribute("data-theme", "dark");
        } else {
            html.setAttribute("data-theme", "light");
        }
    };

    const openDashboard  = () => {
        let menuOpen = document.querySelector(".open")
        let menuClose = document.querySelector(".close")
        menuOpen.classList.add("hidden")
        // menuOpen.classList.add("flex")
        menuClose.classList.remove("hidden")
    }

  return (
    <html lang="en" data-theme="light">

      <body className="bg-primary text-primary ">
      {!darkMode && (
          <div onClick={toggleDarkMode} className="fixed right-16 top-4 z-10">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
              </svg>
          </div>
      )}

      {darkMode && (
          <div onClick={toggleDarkMode} className="fixed right-16 top-4 z-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>

          </div>
      )}

      <div style={{height:"75px"}}  />




      <Header />
        <div className={"bg-primary h[100px]"} />
        

{/* <div className="-mt-8 flex flex-row"> */}


<div className="flex -mt-8">

<div onClick={openDashboard} className="open ml-6 mt-8 md:hidden">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
</div>

<div className="close w-[70%] xs:w-[50%] sm:w-[40%] md:w-[28%] lg:[30%] text-gray-600 border-r-2 border-gray-100 text-lg flex-col pl-6 mt-00 h-[100vh] hidden md:flex bg-white">
  <div className="mt-10 mr-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mb-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  </div>

  <div onClick={(event) => handleOpenClick(event,"/dashboard/my-post")} className={`mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mb-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
      />
    </svg>
    <div className="m-auto ml-0 pl-3 mt-0">My post</div>
  </div>
  <div onClick={(event) => handleOpenClick(event)} className={`mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mb-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
      />
    </svg>
    <div className="m-auto ml-0 pl-3 mt-0 font-normal">Movies</div>
  </div>
  <div onClick={(event) => handleOpenClick(event)} className={`mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 mb-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
      />
    </svg>
    <div className="m-auto ml-0 pl-3 mt-0">My Account</div>
  </div>
</div>
{/* </div> */}

           {children}
           </div>   
         
      </body>
    </html>
  )
}

