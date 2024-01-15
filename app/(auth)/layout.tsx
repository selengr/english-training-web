
import "../../styles/globals.css";


export default function Layout({  children }: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" data-theme="light">
   
      <body className="relative bg-primary text-primary flex flex-col" >
    
        
        {children}

      </body>
    </html>
  );
}
