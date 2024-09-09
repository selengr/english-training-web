import styles from "./banner.module.css"


const Bio = () => {
  return (
    <section className="w-full flex flex-col">

      <div className="flex flex-col">

        <span className="mb-5">Hello World👋</span>
        <span >I'm reza karbakhsh, a software developer who loves exploring AI by building and learning in public.</span>
      </div>

      <div>

        <span className={styles["landing-hover-highlight"]}>Stay tuned for exciting updates - coming soon! </span>
      </div>



    </section>
  );
}

export default Bio;