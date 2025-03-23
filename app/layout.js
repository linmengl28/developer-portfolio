import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Menglin Lin - Software Developer",
  description:
    "This My name is Menglin Amy Lin, a dedicated software engineer pursuing my Master's in Computer Science at Northeastern University. I specialize in AI-driven solutions and data analytics, with expertise in Python, Java, and JavaScript. I'm passionate about building scalable systems that transform raw data into actionable insights through efficient algorithms and innovative approaches. My technical focus includes database optimization, RESTful API development, and implementing AI technologies that deliver measurable results. I enjoy tackling complex problems through creative solutions and am seeking opportunities where I can apply my technical skills while continuing to grow as a professional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
