// 'use client'

// import {useEffect} from "react"
// import Image from 'next/image'
// import axios from "axios"
// import useSWR from "swr";
// import { Email } from "@/styles/components/nodemailer/Email";



// const fetcher = (url) => axios.get(url).then(res => res.data);



// export default function Home() {

//   // const { data, error } = useSWR('/api/auth/register', fetcher);


//   const handlePost = async () => {
//     try {
//       const response = await axios.post('/api/auth/register');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(()=>{
 
//   },[])


//   const handlePost2 = async () => {
//     try {
//       const response = await axios.get('/api/auth/register');
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // if (error) return <div>Error loading data</div>;
//   // if (!data) return <div>Loading...</div>;



//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
// aaaaaaaaaaaaaaa
//             {/* <Email /> */}
 
//     </main>
//   )
// }
