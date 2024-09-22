import Image from "next/image";

export default function Loading() {
    return (
        <div className="w-100 h-100 flex justify-center align-middle">
            <Image
                src={"/pre/images/loading/Loading-own.gif"}
                alt="Picture of the author"
                width={1500}
                height={1000}
            />
        </div>
    );
}
