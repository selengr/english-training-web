import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/section/nav/navbar';
import { Vazirmatn } from 'next/font/google';
import Providers from '@/components/theme/providers'
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/toaster';


const vazir = Vazirmatn({ subsets: ['arabic'] });

export const metadata: Metadata = {
  title: "learning labs",
  description: "learning laboratories",
  icons: './favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fa-Ir' className='scroll-smooth antialiased'
      suppressHydrationWarning>
      <body className={`${vazir.className} bg-[#f8f8f8] dark:text-[hsla(0,0%,100%,.9)]  text-[#37352f] dark:bg-[#2f3437]`}>
        <ThemeProvider
          enableSystem={false}
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <Navbar />

          <main>
            {children}
          </main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}