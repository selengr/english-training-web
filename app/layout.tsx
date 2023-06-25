
import "../styles/globals.css";


export default function Layout({  children }) {


  return (
    <html lang="en" >
   
      <body className="relative bg-primary text-primary flex flex-col" >
        
        {children}

      </body>
    </html>
  );
}
