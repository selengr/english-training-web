import { IPInputs } from "@/app/types/dashboard";
import styles from "../../styles/components/blog/blog.module.css";

const Introduction = ({ data }: { data: IPInputs }) => {
  const tag = JSON.parse(data.tags)
  console.log('data yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy:>> ', tag);
  return (

    <div className={styles["post-blog"]}>
      <div className={styles["post-blog-property-map-opt"]}>
        {tag?.map((it) => (
          <>
            <span>{it}</span>
          </>
        ))}
      </div>

      <span className={styles["post-blog-property-date"]}>
        {/* Mar 7, 2018 */}
        {data.updatedAt}
        {}
        </span>
      {/*<span className={styles["post-blog-property-name"]}>{param}</span>*/}

      <hr className={styles["post-blog-propert-underLine"]} />

    </div>
  );
};

export default Introduction;
