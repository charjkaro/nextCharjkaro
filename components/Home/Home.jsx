/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { Appbanner } from "@/app/charge/page";
import LocationInfo from "./Location";

const advantages = [
  {
    title: "Green Mobility",
    description: "CharjKaro promotes eco-friendly EV adoption",
  },
  {
    title: "EXTENSIVE NETWORK",
    description: "CharjKaro offers a wide network of charging stations.",
  },
  {
    title: "COST-EFFECTIVE CHARGING",
    description:
      "CharjKaro provides a budget-friendly solution for recharging electric vehicles.",
  },
  {
    title: "ALLEVIATING RANGE ANXIETY",
    description:
      "CharjKaro helps users find nearby charging stations, reducing range anxiety.",
  },
  {
    title: "USER FRIENDLY",
    description:
      " The app simplifies EV charging for all drivers. 6. 24/7 Support: Customer assistance around the clock.",
  },
  {
    title: "REAL TIME UPDATE",
    description: "Users check station availability through the App",
  },
];

const Advantage = ({ title, description }) => (
  <li className="py-2">
    <h1 className="text-xl font-semibold text-blue-600">{title}</h1>
    <p className="text-lg text-gray-600">{description}</p>
  </li>
);

const cards = [
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/3-min.png?alt=media&token=514de287-3cc8-4d51-93ff-2a9a7615da91",
    title: "DC001 CHARGER",
    description:
      "These chargers are perfect for fast charging all CCS2/S1, GB/T compatible vehicles, including Log9 batteries, Mahindra e-verito, Tata ACE, and Tata Tigor. They are available in single and dual gun floor-mounted models, so you can choose the one that best suits your needs.",
  },
  {
    title: "AC TYPE 2 CHARGER",

    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/2-min.png?alt=media&token=70103e95-a7d4-4e50-9a5a-bcc7317172b7",
    description:
      "These chargers are available in a variety of power ratings (from 3.3kW to 22kW), are OCPP compatible, and easy to install, making them ideal for residential apartments, workplaces, and commercial purposes",
  },
  {
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1-min.png?alt=media&token=8f003af0-d106-4592-9267-332ec949b051",

    title: "AC001 CHARGER",
    description:
      "This Charger comes with 3 industrial sockets of 3.3kW each and is suitable for charging 2-wheelers, 3-wheelers & 4-wheelers. This charger is certified by ARAI, OCPP compatible and best suitable for fleet (triple socket) charging.",
  },
  //... more cards
];

const Card = ({ imageSrc, title, description }) => (
  <div className=" card w-80 my-5 flex flex-col   justify-start ">
    <figure>
      <img
        src={imageSrc}
        alt="car!"
        className="h-80 w-80 rounded-b-xl object-cover border-4 rounded-3xl border-white"
      />
    </figure>
    <div className="  my-5 ">
      <h2 className="text-xl my-2 font-semibold">{title}</h2>
      <p className="text-base px-2 my-2 text-white">{description}</p>
    </div>
  </div>
);

const AppAdvantages = () => (
  <div
    id="advantages"
    className="flex-col items-center justify-center p-10 font-avenir md:p-20 overflow-x-hidden"
  >
    <h1
      id="advantages"
      className="pb-10 text-center text-4xl font-bold text-blue-600 "
    >
      CHARJKARO – ADVANTAGES
    </h1>
    <div className="flex">
      <div className="list-none flex-col lg:w-[40%]   ">
        {advantages.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
      <div className="relative lg:flex hidden" loading="lazy">
        <div className="w-[25rem] h-[25rem] relative -right-80  z-10 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8506T01.JPG?alt=media&token=a5d75750-7661-4df1-bcfb-720559672325')] bg-cover bg-center"></div>
        <div className="w-[20rem]  h-[20rem] absolute right-[3rem] bottom-9 z-30 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8510T01.JPG?alt=media&token=d5ecb403-549e-48e9-8998-a44772470335')] bg-cover bg-center"></div>
        <div className="w-[15rem]  h-[15rem] absolute -right-[5rem] -bottom-10 z-40 bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/CAM%20A8542T01.JPG?alt=media&token=3ddd7233-7e06-4b36-b390-80883f16d368')] bg-cover bg-center"></div>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <>
      <div className="font-poppins">
        {/* <Navbar /> */}

        {/* <GoodCarousel /> */}
        <div className="relative flex items-center justify-center">
          <video
            autoPlay
            muted
            loop
            src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/f25315cf-b4cb-45ec-a8dc-799916d7b12a%20(1)%20(1).mp4?alt=media&token=e884c865-a92e-4c96-b3ce-4369318b7641"
            className="lg:h-[74vh] h-[40vh] w-[100vw] object-cover object-center brightness-50 opacity-95"
            playsInline
          >
            {" "}
          </video>
          <p className="absolute    lg:text-7xl text-4xl w-[100vw] text-center font-bold lg:top-[20%] top-[35%] lg:right-[27%] -right-[5px] lg:w-1/2 px-2 text-white   lg:leading-tight leading-normal">
            {" "}
            Charge Ahead with <span className="">Charj</span>{" "}
            <span className="">Karo</span>{" "}
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="  text-center  lg:p-20 font-poppins px-5 my-2 "
        >
          <h1 className="pb-10 text-3xl md:text-4xl font-bold text-blue-600">
            SUSTAINABILITY – THE NEW BUZZ WORD
          </h1>
          <p className="md:px-10 p-5 text-left md:text-xl text-lg md:text-center">
            At CharjKaro, we're at the forefront of the Electric Vehicle (EV)
            Revolution, offering a one-stop solution for all your EV charging
            needs. Our mission is to make electric mobility accessible,
            convenient, and affordable for everyone. Whether you're a seasoned
            EV driver or new to the world of electric vehicles, CharjKaro has
            you covered.
          </p>
        </div>
        <div className="text-white" id="location">
          .
        </div>
        <LocationInfo />
        {/* <LocationMob id="location" /> */}
        {/* app info  */}
        <Appbanner />
        <AppAdvantages />
        <div
          id="technology"
          data-aos="fade-up"
          className="flex-col items-center font-poppins justify-center rounded-3xl   py-10   md:p-20 bg-[#36aa4a] bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center  text-white "
        >
          <h1 className="pb-2 text-center text-4xl font-bold text-white ">
            What We Offer
          </h1>
          <div className="mx-5 lg:mx-2  justify-evenly md:gap-2  flex flex-wrap">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
        <div id="partner" className="text-center  ">
          <h1 className="text-4xl text-blue-600 font-semibold  py-10 p-5">
            Our Partners
          </h1>

          <div className="flex md:justify-center justify-center md:gap-20 gap-10 px-10 flex-wrap items-center ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/smcd.png?alt=media&token=b932c250-9187-4c54-9968-960085894b6e"
              alt=""
              className="md:h-36  h-20 object-contain"
            />
            <img
              src="https://static1.s123-cdn-static-a.com/uploads/2665555/normal_5da5b6eea34ac.gif"
              alt=""
              className="md:h-24   h-20 object-contain"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/1645291697-BECIL.png?alt=media&token=eaf4e522-7ff7-4de4-b08a-cce8d7694a9b"
              alt=""
              className="md:h-36  h-20 object-contain"
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/HITES-removebg-preview.webp?alt=media&token=9429dbae-3faf-45cd-b820-b4bdf740b0f6"
              alt=""
              className="md:h-52 h-36 "
            />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <div className=""></div>
    </>
  );
};

export default HomePage;
