import { IPInputs } from "@/app/types/dashboard";
import styles from "../../styles/components/blog/blog.module.css";

const MainIdea = ({data}:{data:IPInputs}) => {
  // if(props?.params?.id === 2 ) return (
  //     <>
  //         {fetch("./FIRST.md")}
  //     </>
  // )

  let Jsondb = [
    {
      title: "The 12 Tenses of English Grammar",
      introduction: {
        title: "Introduction to the book",
        introduction:
          "Tenses are used to show when something happened or is happening. There are 12 tenses in English:",
        introductionList: [
          "Present simple",
          "Present continuous",
          "Present perfect",
          "Present perfect continuous",
          "Past simple",
          "Past continuous",
          "Past perfect",
          "Past perfect continuous",
          "Future simple",
          "Future continuous",
          "Future perfect",
          "Future perfect continuous",
        ],
      },
      body: {
        title:
          "Here are some examples of sentences using the different tenses:",
        body: "",
        bodyList: [
          "Present simple: I eat breakfast every day.",
          "Present continuous: I am eating breakfast right now.",
          "Present perfect: I have eaten breakfast.",
          "Present perfectcontinuous: I have been eating breakfast for an hour.",
          "Past simple: I ate breakfast this morning.",
          "Past continuous: I was eating breakfast when you called.",
          "Past perfect: I had eaten breakfast before you called.",
          "Past perfect continuous: I had been eating breakfast for an hour before you called.",
          "Future simple: I will eat breakfast tomorrow.",
          "Future continuous: I will be eating breakfast tomorrow morning.",
          "Future perfect: I will have eaten breakfast by the time you get here.",
          "Future perfect continuous: I will have been eating breakfast for an hour by the time you get here.",
        ],
      },
      tips: {
        title: "Here are some tips for teaching the 12 tenses",
        tips: "",
        tipsList: [
          "Start by teaching the basic tenses, such as the present simple, past simple, and present continuous.",
          "Use simple, clear examples to illustrate each tense.",
          "Provide plenty of practice exercises for students to work on.",
          "Be patient and encouraging, as learning grammar can be challenging for some students.",
        ],
      },
      mainIdea: {
        title:
          "The 12 tenses of English grammar are essential for communicating effectively. By understanding the different tenses, we can choose the right words to use in the right context.",
        mainIdea: "",
        mainIdeaList: [],
      },
      extraInformation: {
        title:
          "In addition to the 12 tenses mentioned above, there are also some other less common tenses, such as:",
        extraInformation: "",
        extraInformationList: [
          
            "Conditional tenses: Conditional tenses are used to express hypothetical situations. Some common conditional tenses are the 'if' clause, the 'could' clause, and the 'would' clause.",
            "Modal verbs: Modal verbs are used to express possibility, necessity, permission, and obligation. Some common modal verbs are can, could, may, might, must, should, and would.",
            "Gerunds: Gerunds are verb forms that end in '-ing' and can be used as nouns, adjectives, or adverbs.",
            "Infinitives: Infinitives are verb forms that start with 'to' and can be used as nouns, adjectives, or adverbs.",
          
        ],
      },
      point: {
        title: "Grammar explanations:",
        point: "",
        pointList: [
          "The present simple is used to talk about actions or events that happen regularly or habitually."+
          "It is also used to talk about facts or truths.",
          "The present continuous is used to talk about actions or events that are happening now or happening at the moment of speaking.",
          "but have a connection to the present. It can also be used to talk about experiences or things that have happened for a period of time.",
          "The present perfect continuous is used to talk about actions or events that have been happening for a period of time and are still happening now.",
          "The past simple is used to talk about actions or events that happened in the past and are not connected to the present.",
          "The past continuous is used to talk about actions or events that were happening in the past but have now stopped.",
          "The past perfect is used to talk about actions or events that happened before another action or event in the past.",
          "The past perfect continuous is used to talk about actions or events that had been happening for a period of time before another action or event in the past.",
          "The future simple is used to talk about actions or events that will happen in the future.",
          "The future continuous is used to talk about actions or events that will be happening in the future.",
          "The future perfect is used to talk about actions or events that will have happened by a certain time in the future.",
          "The future perfect continuous is used to talk about actions or events that will have been happening for a period of time by a certain time in the future.",
        ],
      },

      conclusion: {
        title: "The conclusion should summarize the main points of the post and provide some final thoughts on the importance of learning the 12 tenses.",
        Conclusion: "",
        ConclusionList: [ ],
      },

      slug: 1,
      name: "1nop",
    },
  ];

  return (
    <div className={styles["blog-main-whole"]}>
      {Jsondb.map((item, inex) => {
        return (
          <>
            {/* <span className={styles["costum-blog-span-italy"]}>
              {item.title ??
                "Everything I wish I,d known before starting Saasify 2 years ago."
                }
            </span> */}

            <div className="h-16" />

            <h1 className={styles["costum-blog-h1"]}>Introduction</h1>
            <div className="h-4" />

            <div className={styles["costum-blog-quote"]}>
              <h3 className="font-light mb-5">{data?.introduction}</h3>
              {/* {item.introduction?.introduction ?? ""} */}

              {/* <u>
                {item.introduction.introductionList.map((item) => {
                  return (
                    <>
                      <li>{item ?? ""}</li>
                    </>
                  );
                })}
              </u> */}
            </div>


            <div className="h-6 mt-6" />
            <h1 className={styles["costum-blog-h1"]}>Body</h1>
            <div className="h-4" />

            <h3 className="font-light mb-2">{data.body ?? ""}</h3>
   
            {/* <span className={styles["costum-blog-span border-b-0"]}>
              {item.body.body ?? ""}
            </span> */}

            {/* <u>
              {item?.body?.bodyList.map((item) => {
                return (
                  <>
                    <li className="border-none">{item ?? ""}</li>
                  </>
                );
              })}
            </u> */}

            <div className="h-6 mt-6" />

            <span className={styles["costum-blog-span"]}>
              {data.tips ?? ""}
            </span>

            <div className="h-4" />

            <span className={styles["costum-blog-span"]}>
              {data.tips ?? ""}
            </span>

            {/* <u>
              {item?.tips.tipsList.map((item) => {
                return (
                  <>
                    <li>{item ?? ""}</li>
                  </>
                );
              })}
            </u> */}

            <div className="h-4" />

            <span className={styles["costum-blog-span"]}>
              {data.mainIdea ?? ""}
            </span>

            <div className="h-4" />

            {/* <span className={styles["costum-blog-span"]}>
              {item.mainIdea?.mainIdea ?? ""}
            </span> */}

            <div className="h-4" />

            {/* <div>
              {item?.mainIdea?.mainIdeaList.map((item) => {
                return (
                  <>
                    <span>{item ?? ""}</span>
                  </>
                );
              })}
            </div> */}

            <div className="h-4" />
            <span className={styles["costum-blog-span"]}>
              {data.extraInformation ?? ""}
            </span>
            <div className="h-4" />
{/* 
            <span className={styles["costum-blog-span"]}>
              {item.extraInformation?.extraInformation ?? ""}
            </span> */}

            {/* <div className="flex flex-col">
              {item?.extraInformation?.extraInformationList.map((item) => {
                return (
                  <>
                    <span>{item ?? ""}</span>
                  </>
                );
              })}
            </div> */}


            <div className="h-4" />
            <span className={styles["costum-blog-span"]}>
              {data.point ?? ""}
            </span>
            <div className="h-4" />

            {/* <span className={styles["costum-blog-span"]}>
              {item.point?.point ?? ""}
            </span> */}

            {/* <div className="flex flex-col">
              {item?.point?.pointList.map((item) => {
                return (
                  <>{" "} 
                    <span>{item ?? ""}</span>{" "} <span></span>
                  </>
                );
              })}
            </div> */}


            <div className="mb-10" />
               <h1 className={styles["costum-blog-h1"]}>Conclusion</h1>
 
            <span className={styles["costum-blog-span"]}>
              {data.conclusion ?? ""}
            </span>

            <div className="mb-2" />

            <div className="h-10" />
            {/* <div className={styles["blog-main-gray_background"]}>
              <span className="font-bold">
                <em>
                  Im currently working to transition Saasify to a more open,
                  community-led platform.
                </em>
              </span>
              <span>
                If youre interested in contributing to Saasify as an open source
                platform, please get in touch on our open slack.
              </span>
            </div> */}
          </>
        );
      })}
    </div>
  );
};

export default MainIdea;
