import { CardSpotlight } from "@/components/ui/card-spotlight";

const page = () => {
    return (
        <div>



            <CardSpotlight className="h-96 w-96">
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
            </CardSpotlight>
        </div>
    );
}

export default page;