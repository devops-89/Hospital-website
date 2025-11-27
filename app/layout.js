
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import TransformSection from "@/components/TransformSection/TransformSection";
export const metadata = {
  title: "ApexCare",
  description: "Expert dental care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <TransformSection />
        <Footer />
      </body>
    </html>
  );
}
