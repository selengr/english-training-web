import prisma from "@/lib/prisma";


const Conclusion = async ({ blog }: { blog: any }): Promise<JSX.Element> => {
    await prisma.post.update({
        where: { id: blog?.id },
        data: {
            viewCount: blog.viewCount + 1
        }
    })


    return (
        <>
            <hr className="w-full mt-8 " />
            <h1 className="pb-10 pl-10 pt-4 flex items-center justify-start">
                {blog?.viewCount} views
            </h1>
        </>
    );
}

export default Conclusion;