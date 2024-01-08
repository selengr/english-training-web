import styles from "../../styles/components/blog/blog.module.css";

const Introduction = ({updatedAt}:{updatedAt:String}) => {
  return (

    <div className={styles["post-blog"]}>
      <div className={styles["post-blog-property-map-opt"]}>
        {[1111, 2222222, 23, 584, 888888885].map((it) => (
          <>
            <span>{it}</span>
          </>
        ))}
      </div>

      <span className={styles["post-blog-property-date"]}>
        {/* Mar 7, 2018 */}
        {updatedAt}
        {}
        </span>
      {/*<span className={styles["post-blog-property-name"]}>{param}</span>*/}

      <hr className={styles["post-blog-propert-underLine"]} />

    </div>
  );
};

export default Introduction;
