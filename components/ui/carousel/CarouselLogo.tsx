// import React, { useEffect } from "react"
// import Glide from "@glidejs/glide"
// import Image from "next/image"

// export default function CarouselLogo() {
//   useEffect(() => {
//     const slider = new Glide(".glide-09", {
//       type: "carousel",
//       autoplay: 1,
//       animationDuration: 4500,
//       animationTimingFunc: "linear",
//       perView: 3,
//       classes: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//           gap: 36,
//         },
//       },
//     }).mount()

//     return () => {
//       slider.destroy()
//     }
//   }, [])

//   return (
//     <>
//       {/*<!-- Component: Testimonial carousel --> */}
//       <div className="glide-09 relative w-full">
//         {/* <!-- Slides --> */}
//         <div data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
//             <li>
//               <Image
//                 height={50}
//                 width={50}
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-1.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//                 alt="test"
//               />
//             </li>
//             <li>
//               <Image
//                 height={50}
//                 width={50}
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-2.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//                 alt="test"
//               />
//             </li>
//             <li>
//               <Image
//                 height={50}
//                 width={50}
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-3.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//                 alt="test"
//               />
//             </li>
//             <li>
//               <Image
//                 height={50}
//                 width={50}
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-4.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//                 alt="test"
//               />
//             </li>
//             <li>
//               <Image
//                 height={50}
//                 width={50}
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-5.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//                 alt="test"
//               />
//             </li>
//             <li>
//               <img
//                 src="https://Tailwindmix.b-cdn.net/carousel/logos/carousel-logo-image-6.svg"
//                 className="m-auto h-20 max-h-full w-auto max-w-full"
//               />
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/*<!-- End Testimonial carousel --> */}
//     </>
//   )
// }