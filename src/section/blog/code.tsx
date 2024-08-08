// import { IPInputs } from "@/app/types/dashboard";
import styles from "../../../styles/components/custom/custom.module.css";

function Code({ data }: { data: any }) {
  return (
    <>
      <div className={styles.docs}>
        {/* ==================================================================== */}
        <div className="h-10" />
        <h2 className={styles["costum-blog-h1"]}>Author:</h2>

        <div className="flex w-full my-4">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[48%]">
           {data.information.author ?? ""}
          </div>
          <div className="divider divider-horizontal "></div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center w-[48%]">
           {data.information.email ?? ""}
          </div>
        </div>

        {/* ==================================================================== */}

        {/* <h1>
          Experimental
          <code>category</code>
        </h1> */}

        {/* <pre className="language-english">
           <code className="language-js">
           <span>
                module  nextConfig
           </span>
           </code>
        </pre> */}
      </div>
    </>
  );
}

export default Code;
