import styles from "../../styles/components/blog/blog.module.css";

const MainIdea = (props) => {
    // if(props?.params?.id === 2 ) return (
    //     <>
    //         {fetch("./FIRST.md")}
    //     </>
    // )
  return (
    <div className={styles["blog-main-whole"]}>
      <span className={styles["costum-blog-span-italy"]}>
        Everything I wish I,d known before starting Saasify 2 years ago.
      </span>



      <div className="h-16" />

      <h1 className={styles["costum-blog-h1"]}>Intro</h1>
      <div className="h-4" />


        <div className={styles["costum-blog-quote"]}>
            Several months ago, we started a company…Last week, we launched our first product…Tomorrow, we’ll be taking over your news feed
            <span>…</span>
        </div>

        <div className="h-6" />

      <span className={styles["costum-blog-span"]}>
        I started working on Saasify two years ago with one clear goal in mind:
        to help developers like myself go independent.
      </span>
      <span className={styles["costum-blog-span"]}>
        m a reasonably experienced entrepreneur, so as I dove in, there are a
        lot of basics that I managed to do well such as:
      </span>

      <div className="h-6" />

      <u>
        <li>Talking with (literally) hundreds of prospective customers</li>
        <li>Focusing on a core mission that I care deeply about</li>
        <li>Releasing product early & often</li>
      </u>


      <div className="h-10" />
      <div className={styles["blog-main-gray_background"]}>
        <span className="font-bold">
          <em>
            Im currently working to transition Saasify to a more open,
            community-led platform.
          </em>
        </span>
        <span>
        If youre interested in contributing to Saasify as an open source platform, please get in touch on our open slack.
        </span>
      </div>
    </div>
  );
};

export default MainIdea;
