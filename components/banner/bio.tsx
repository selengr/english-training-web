import styles from "../../styles/components/banner/banner.module.css"


const Bio = () => {
    return (
        <section className={styles["landing-page-content-inner"]}>
            
            <div className="flex flex-col">

              <span className="mb-5">Hello World👋</span>
              <span >I'm reza karbakhsh, a software developer who loves open source and AI.</span>
            </div>

            <div>
                
              <span className={styles["landing-hover-highlight"]}>Lorem amet consectetur adipisicing elit. Deleniti voluptate aut eveniet, </span>
            </div>

      
           
        </section>
    );
}

export default Bio;