
import prisma from "@/lib/prisma";

import { notFound } from "next/navigation";
import { authOption } from '@/lib/next-auth';
import { getServerSession } from 'next-auth';
// import UploadForm from "@/components/uploader/page";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import CompleteUserInfo from "@/section/profile/CompleteUserInfo";

const page = async () => {

    const session = await getServerSession(authOption);
    const user = await prisma.user.findUnique({
        where: {
            email: session?.user?.email as string,
        },
    });

    if (!user) notFound();




    return (
        <div className="-z-10">
            <BackgroundBeamsWithCollision>
                <h2 className="text-2xl relative md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    {user.name} {user.family} {" "}
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">{user.email}</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span className="">{user.email}</span>
                        </div>
                    </div>
                </h2>
            </BackgroundBeamsWithCollision>




            <CompleteUserInfo session={session} />

            {/* <CardSpotlight className="h-96 w-96">
                <p className="text-xl font-bold relative z-20 mt-2 text-white">
                    Authentication steps
                </p>
                <div className="text-neutral-200 mt-4 relative z-20">
                    Follow these steps to secure your account:
                    <ul className="list-none  mt-2">
                        <div>Enter your email address </div>
                        <div>Create a strong password </div>
                        <div>Set up two-factor authentication </div>
                        <div>Verify your identity </div>
                    </ul>
                </div>
                <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                    Ensuring your account is properly secured helps protect your personal
                    information and data.
                </p>
            </CardSpotlight> */}
        </div>
    );
}

export default page;