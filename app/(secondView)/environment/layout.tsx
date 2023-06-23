"use client";

import Footer from "../../../components/footer";
import styles from "../../../styles/components/environment/environment.module.css"
    import "../../../styles/globals.css";

export default function Layout({ children }) {


    return (
        <html lang="en" data-theme="light">
        <head>
            <title>tips</title>
        </head>
        <body className={`${styles["second-layout"]} relative bg-primary text-primary flex flex-col w-full`} >
             {children}
        {/*<Footer />*/}
        </body>
        </html>
    );
}
