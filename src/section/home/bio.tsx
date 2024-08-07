import styles from "./banner.module.css"


const Bio = () => {
    return (
        <section className="w-full flex flex-col">
            
            <div className="flex flex-col">

              <span className="mb-5">Hello World👋</span>
              <span >Im reza karbakhsh, a software developer who loves open source and AI.</span>
            </div>

            <div>
                
              <span className={styles["landing-hover-highlight"]}>Stay tuned for exciting updates - coming soon! </span>
            </div>

      
           
        </section>
    );
}

export default Bio;