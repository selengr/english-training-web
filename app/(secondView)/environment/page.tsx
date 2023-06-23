import styles from "../../../styles/components/environment/environment.module.css"
import "../../../styles/globals.css";
import Image from "next/image";
import Slidein from "../../../components/custom/slidein";



export default function Environment() {


    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behavior

        // get the values of the email and problem description fields
        // const email = event.target.elements["email-address-0"].value;
        // const problemDescription = event.target.elements["describe-your-problem-1"].value;

        // do something with the form data (e.g., send it to a server)
    }

    return (
        <>
            <div className={styles["entry-header-whole"]} >



                <div className="w-full">

                    <Image
                        src={"/images/scene.jpg"}
                        alt="Picture of the author"
                        width={1000}
                        height={500}
                        className={styles["Env--scene"]}
                    />


                       <h1 className={`${styles["entry-header-h1"]} font-custom `}>To begin with  </h1>
                        <p>
                            <time dateTime="2015-11-03" className={styles["time-publish"]}>
                                February 24, 2021 by
                            </time>
                            <span className={styles["entry-header-span"]}> reza karbakhsh </span>
                        </p>

                    <button className={styles["entry-header-btn"]}>
                        Go to practice process
                    </button>


             <div>
             </div>

                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>


                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>


                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>



                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>



                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>



                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>


                    <div className="w-full flex mt-10 flex-col items-start">

                        <h1 className="text-my-color font-custom text-4xl overflow-hidden mb-2">To begin with </h1>
                        <span className=" font-custom text-lg">
                                development tool for testing if your PHP site is running.
                                Point website visitors to localhost instead and you will see what it looks like
                                if they do not have your page cached. Useful for testing changes and making sure
                                that things still work in network interface hardware.
                        </span>
                    </div>


                 <br />

                 <br />
                    <Slidein />
                 <br />

                 <hr />
                 <hr />
                 <hr />


                    <form className={styles["eapps-form-header"]} >
                       <section>
                           <div className={styles["eapps-form-header-picture"]}>
                               {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round"
                                         d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                               </svg> */}

                           </div>
                           <div  className={styles["eapps-form-fix"]}>
                               <h1 className={styles["eapps-form-header-title"]}>
                                   You need support?
                               </h1>
                               {/* <span className={styles["eapps-form-header-span"]}>Leave your message and we'll get back to you shortly.</span> */}
                           </div>
                       </section>
                        <div className={styles["eapps-form-fix"]}>
                            <label className={styles["eapps-form-element-label"]}>
                                Email address <span className="text-5xl ml-2">*</span>
                            </label>

                            <input
                                className={styles["eapps-form-element-input-email"]}
                                name="email-address-0" type="email"
                                // pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                placeholder="example@domain.com"
                                // required=""
                            />
                        </div>
                        <div>
                            <label className={styles["eapps-form-element-label"]}>
                                Describe your problem  <span className="text-lg ml-2">*</span>
                            </label>

                            <textarea
                                className={`${styles["eapps-form-element-input-email"]} ${styles["eapps-form-element-textarea"]}`}
                                      name="describe-your-problem-1" placeholder="Tell us briefly about your needs"
                                    //   required=""
                            >
                            </textarea>
                        </div>
                        <button type="submit" className={styles["eapps-form-element-btn"]}>submit</button>
                    </form>

                </div>
            </div>
        </>
    );
}
