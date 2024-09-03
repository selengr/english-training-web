

const Conclusion = ({ viewCount }: { viewCount: number }) => {

    return (
        <>
            <hr className="w-full mt-8 " />
            <h1 className="pb-10 pl-10">
                view : {viewCount}
            </h1>
        </>
    );
}

export default Conclusion;