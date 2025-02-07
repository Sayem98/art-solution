import Navbar from "@/components/Navbar";
import ClientsSection from "@/components/ClientsSection";
import Gallery from "@/components/Gallary";
import AboutUs from "@/components/AboutUs";
import Story from "@/components/Story";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#eff3f9] flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main
        id="clients"
        className=" flex flex-1 flex-col gap-12 pt-20 px-4 md:px-96"
      >
        <ClientsSection />
      </main>
      <Gallery />
      <AboutUs />
      <Story />
      <ContactUs />
      <Footer />
    </div>
  );
}
