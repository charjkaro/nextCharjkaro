


import ContactForm from "./contactForm";
import { Appbanner } from "../charge/page";
import Navbar from "@/components/Navbar/Navbar";
import PcNav from "@/components/Navbar/PcNav";
import Footer from "@/components/footer/Footer";

const Contact = () => {
  return (
    <>
    
      <div>
        <Navbar />
        <PcNav/>

        <ContactForm />

        <Appbanner />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
