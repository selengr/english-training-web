// const page = () => {
//   return (
//     <div className="test -mt-8 ">
//       <div className="ml-6 md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </div>

//       <div className="w-[30%]  text-gray-600 border-r-2 border-gray-100 text-lg flex-col pl-6 mt-00 h-[100vh] hidden md:flex bg-white mr-auto">
//         <div className="mt-10 mr-8">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 mb-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//             />
//           </svg>
//         </div>

//         <div className="mr-4 mt-10 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 mb-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
//             />
//           </svg>
//           <span className="m-auto ml-0 pl-3 mt-0">my post</span>
//         </div>
//         <div className="mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 mb-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
//             />
//           </svg>

//           <span className="m-auto ml-0 pl-3 mt-0  font-normal">movies</span>
//         </div>
//         <div className="mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm ">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6 mb-1"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
//             />
//           </svg>
//           <span className="m-auto ml-0 pl-3 mt-0">my account</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;









'use client'


import React from 'react';

const Page = () => {


    const openDashboard  = () => {debugger
        let menuOpen = document.querySelector(".open")
        let menuClose = document.querySelector(".close")
        menuOpen.classList.add("hidden")
        // menuOpen.classList.add("flex")
        menuClose.classList.remove("hidden")
    }

  return (
    <div className="-mt-8">

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

      <div className="close w-[80%] sx:w-[60%] sm:w-[40%] md:w-[25%] text-gray-600 border-r-2 border-gray-100 text-lg flex-col pl-6 mt-00 h-[100vh] hidden md:flex bg-white mr-auto">
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

        <div className="mr-4 mt-10 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm">
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
          <a href="/create/dashboard/my-post" className="m-auto ml-0 pl-3 mt-0">My post</a>
        </div>
        <div className="mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm">
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
          <a href="/movies" className="m-auto ml-0 pl-3 mt-0 font-normal">Movies</a>
        </div>
        <div className="mr-4 mt-6 flex flex-row font-normal hover:bg-gray-100 p-1 hover:text-indigo-600 w-[94%] rounded-sm">
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
          <a href="/account" className="m-auto ml-0 pl-3 mt-0">My Account</a>
        </div>
      </div>
    </div>
  );
};

export default Page;
