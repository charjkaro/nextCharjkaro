import Navbar from "@/components/Navbar/Navbar";
import PcNav from "@/components/Navbar/PcNav";
import Footer from "@/components/footer/Footer";

export const Appbanner = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className=" font-poppins  py-10 text-center  text-white md:p-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center"
      >
        <h1 className=" pb-10 text-4xl font-bold">CHARJKARO APP</h1>
        <p className="px-10 text-xl">
          Download our Mobile App. and get started. Make your payments and book
          your Station Bay in advance.
        </p>
        <div className=" m-10 flex justify-center gap-5 text-black">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.charjkaro&pcampaignid=web_share"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Google_Play_Store_badge_EN.svg.webp?alt=media&token=f3bc5c3b-27bd-4616-91bb-4adcae92ed07"
              alt=""
              className="md:w-44 shadow-2xl shadow-black w-32 transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90 "
            />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/in/app/charjkaro/id6456938758"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Download_on_the_App_Store_Badge.svg.png?alt=media&token=f618cd54-3001-4847-8938-e87a4a5c7898"
              alt=""
              className="md:w-44 w-32 shadow-2xl shadow-black transition-transform transform hover:translate-x-3 hover:translate-y-3 hover:scale-90"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Charge = () => {
  return (
    <>
      <Navbar />
      <PcNav />

      <div>
        <h1 className="lg:p-10 px-10 lg:text-7xl text-center text-4xl font-bold ">
          How to Charge your Electric vehicle?
        </h1>
        <h1 className="lg:p-10 px-10 lg:text-7xl text-center text-4xl font-bold ">
          अपने इलेक्ट्रिक वाहन को कैसे चार्ज करें?
        </h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10 overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/4.webp?alt=media&token=dfaa5acb-0e3c-449c-8e20-669267b307b9"
            className="lg:h-96 h-60  object-cover"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/5.webp?alt=media&token=8ece5049-a0b0-4678-91a2-3dee505e6d91"
            className="lg:h-96 h-60 object-cover"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/6.webp?alt=media&token=c44d4fc5-b307-40fc-9dd1-680bfcf8dcb3"
            className="lg:h-96 h-60 object-cover"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/7.webp?alt=media&token=dd349391-1bed-4ed3-b13a-a28e578e9d67"
            className="lg:h-96 h-60 object-cover"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/8.webp?alt=media&token=29d7f996-9f4d-4b63-8c7f-0b30a576ca66"
            className="lg:h-96 h-60 object-cover"
            alt=""
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/9.webp?alt=media&token=49ebdbb7-b6a6-4bf4-91c8-cd380ee8ea90"
            className="lg:h-96 h-60 object-cover"
            alt=""
          />
        </div>

        <Appbanner />
      </div>
      <Footer/>
    </>
  );
};

export default Charge;
