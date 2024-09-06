
import Image from "next/image";
import prisma from "@/lib/prisma";
import styles from "@/section/home/banner.module.css"
import { CardStack } from "@/components/ui/card-stack";
import { BackgroundGradientAnimation } from "@/components/hero-header/BackgroundGradientAnimation";


const AboutUs = async () => {
    const user = await prisma?.user?.findMany();

    return (
        <>


            <div className={styles["landing-main"]}>
                {/* <div className={`${styles["landing-img"]} `}> <HeroHeader /></div> */}

                <BackgroundGradientAnimation containerClassName={styles["landing-img"]} />
                {/* <Image
                    // loader={myLoader}np
                    src={'/pre/about/about-me.avif'}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className={styles["landing-img"]}
                /> */}




                <Image
                    src={"/pre/images/E52075F8-14EA-496F-A10C-CB4405AFE196_1_105_c.jpeg"}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className={`${styles["landing-div-rounded"]}`}
                />


                <h1 className={styles["landing-title"]}>Learning labs</h1>




            </div>

            <div className="w-full">




                <div className="flex justify-center items-start flex-col max-w-[60%] m-auto">

                    <br ></br>
                    <br ></br>

                    <div className="mockup-code w-full">
                        <p data-prefix="👋">Hey hey 👋</p>
                        <br ></br>
                        <p data-prefix="👋">My name is Reza Karbakhsh.</p>
                        <br ></br>
                        <p data-prefix="👋">I'm a software developer who loves exploring AI by building and learning in public.</p>
                        <br ></br>
                        <p data-prefix="👋">In my spare time, I work on products, games, websites, tech demos — I love using my technical skills to build cool & interesting things.</p>
                        <br ></br>
                        <p data-prefix="👋">You can find me on <a className="font-bold" href="mailto:reza1997karbakhsh@gmail.com">Gmail</a> and <a href="https://github.com/selengr" className="font-bold">GitHub</a> and
                            <a className="font-bold" href="instagram://media?id=rezakarbakhsh76">Instagram</a>
                            <a className="font-bold" href="https://instagram.com/rezakarbakhsh76">Instagram2</a>
                        </p>
                    </div>


                    <br ></br>
                    <br ></br>
                    <br ></br>

                    <div className="mockup-code w-full">
                        <pre data-prefix=">" className="text-warning"><code>welecom...</code></pre>
                        <p data-prefix="👋">Get your edge back and grow more motivated, confident, and productive with us, for self-improvement.
                        </p>
                        <p data-prefix="👋">stay tuned with our famous teachers and coaches to develop your mindset and high-performance habits!
                        </p>
                        <p> Now you get them all in one place to help you become more motivated and successful, every day</p>
                    </div>

                    <br ></br>
                    <br ></br>

                    {/* <CanvasRevealEffect /> */}
                    <div className="flex w-full items-center justify-center place-items-center">
                        <CardStack items={user} />
                    </div>


                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="flex w-full">
                        <h1 className="grid text-xl h-10 flex-grow card bg-base-300 rounded-box ">These topics will be taught by teachers.</h1>
                        {/* <div className="divider divider-horizontal">These topics will be taught by teachers.</div> */}
                        {/* <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">this web site is for you people</div> */}
                    </div>


                    <pre data-prefix=">" className="text-warning"><code>+ english</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ how to learn faster </code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ daily exclusive high-performance coaching</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ finding purpose</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ self-discipline</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ wealth habits</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ positive mental attitude</code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ wellness habits </code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ RELATIONSHIPS & FRIENDSHIPS </code></pre>
                    <pre data-prefix=">" className="text-warning"><code>+ conflict management</code></pre>



                    <br />
                    <br />
                    <br />
                    <br />

                    <span>It's time to BREAK the patterns of fatigue, distraction, aimlessness and "bad days"
                        <br /> and BREAKTHROUGH to greater aliveness, confidence and progress.
                        <br />
                        <br />
                        teachers, community, and support you need to radically shift your life into greater aliveness, ambition, contributions, and performance!</span>
                    <br />
                    <br />
                    THIS is the personal development web you've always wanted!
                    <br /> <br />



                    <span className="text-left">Cheers 😊</span>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

            </div>

        </>
    );
}




export default AboutUs;