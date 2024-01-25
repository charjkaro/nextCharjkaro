import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Navbar/Navbar";
import PcNav from "@/components/Navbar/PcNav";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <PcNav/>

      <HomePage/>
      <Footer/>

   
    </main>
  );
}
