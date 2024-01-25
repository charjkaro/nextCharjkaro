"use client"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

const LocationInfo = () => {
  const locations = [
    {
      address: "RAO TULA RAM MARG NEAR SANGAM CUT ",
      location: "https://maps.app.goo.gl/KDmVx2xJtQYRWUEY7",
    },
    {
      address: "DHALAO NEAR SANGAM CINEMA T- POINT",
      location: "https://maps.app.goo.gl/fStT31funmWEZgMj6",
    },
    {
      address: "NEAR SIRI FORT PARKING AREA ",
      location: "https://maps.app.goo.gl/Mc6mg2soZzVTP4ZNA",
    },
    {
      address: "DHALAO NEAR ADCHINI TRAFFIC SIGNAL",
      location: "https://maps.app.goo.gl/Zs3td1KbBeJK3rBF9",
    },
    {
      address: "DHALAO NEAR LSR COLLEGE ",
      location: "https://maps.app.goo.gl/8HmyNSYKL9E7tWj59",
    },
    {
      address: "NEAR QUTUB MINAR ROAD",
      location: "https://maps.app.goo.gl/Cq7ARHf6SFWtjMxU7",
    },

    {
      address: "PRESS ENCLAVE ROAD ",
      location: "https://maps.app.goo.gl/KZQkVLxKY5yJDH7ZA",
    },
    {
      address: "DHALAO NEXT TO MALAI MANDIR RING ROAD",
      location: "https://maps.app.goo.gl/KpZWnhWoqC4PN7es8",
    },
    {
      address: "NEAR ANDHERIA MOD",
      location: "https://maps.app.goo.gl/K4BmwmLzSC8krC6t8",
    },
    {
      address: "NEAR ASIAD VILLAGE ROAD  ",
      location: "https://maps.app.goo.gl/iQgUM3ugCr7EUHFg6",
    },
    {
      address: "DHALAO NEAR GK1 NALA      ",
      location: "https://maps.app.goo.gl/u1EdzLXKwThnezCq7",
    },
    {
      address: "DHALAO NEAR SAPNA CINEMA",
      location: "https://maps.app.goo.gl/SxbLsZgtYTpDTWwRA",
    },
    {
      address: "YUSUF SARAI PARKING AREA FC AAIMS      ",
      location: "https://maps.app.goo.gl/hFAdGK4YUSmDKzKs5",
    },
    {
      address: "Shyam Lal College",
      location: "https://maps.app.goo.gl/xzqSMXBSC4QfarXf9",
    },
    {
      address: "NH8-7 (Panchsheel Park Metro Station Gate No 1) ",
      location: "https://maps.app.goo.gl/44X3txToZrJhLqaW8",
    },
    {
      address: "NH8-5 (Nr IIT FOB)",
      location: "https://maps.app.goo.gl/dyKR71qNXFUjFAbk9",
    },
    {
      address: "Hauz khas Metro Station ",
      location: "https://maps.app.goo.gl/ff8hEHcpZiKR87KM9",
    },
    {
      address: "Malai Mandir ",
      location: "https://maps.app.goo.gl/rmuwGS9BfejJqzH87",
    },
    {
      address: "RTR Marg 1",
      location: "https://maps.app.goo.gl/EaUR2vhapNMvxkx49",
    },
    {
      address: "Qutub Minar",
      location: "https://maps.app.goo.gl/htWjcADQimj2hMmP8",
    },
    {
      address: "GK2",
      location: "https://maps.app.goo.gl/2EbSnvuU1YUwuMX67",
    },
    {
      address: "Paschim Vihar West ",
      location: "https://maps.app.goo.gl/fLQrmfJh1Ssm18Fp8",
    },
  ];

  return (
    <div>
      <div
        id="location"
        className=" lg:flex flex-col overflow-hidden items-center justify-center rounded-3xl bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/imgonline-com-ua-ReplaceColor-yEYGrpRdQ4jaSp.png?alt=media&token=e9a4fa71-8283-4592-9f71-a7f0debb7a41')] bg-cover bg-center bg-[#36aa4a] lg:py-10 text-center font-poppins "
        loading="lazy"
      >
        <h1 className="pb-2 px-2 mb-4 pt-10 md:text-4xl text-2xl  font-bold text-white">
          CHARJKARO STATION LOCATION
        </h1>
        <p className="px-10 text-left text-lg md:text-center text-white">
          CharjKaro has a network of 300+ EV Charging Stations spread across
          Delhi. Presenting a chain of reliable charging options in Delhi
        </p>
        <div className="flex justify-center items-center px-36 my-2">
          <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Untitled%20design%20(3).webp?alt=media&token=cf6ed5e2-6d53-47d3-b351-c2ce4f23cde8')] h-[35rem] w-[90vw] flex justify-end p-[20px] lg:p-10 bg-cover rounded-3xl  bg-center m-10">
            <div className="w-96 carousel rounded-box flex justify-center shadow-2xl shadow-green-700">
              <Swiper
                grabCursor={true}
                loop={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
              >
                {locations.map((location, index) => (
                  <SwiperSlide
                    key={index}
                    className="card h-[30rem]   bg-base-100  shadow-xl carousel-item "
                  >
                    <figure className="px- pt-10">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Untitled_design__2_-removebg-preview.webp?alt=media&token=11f64028-c437-410c-8ca7-aa4d212339b4"
                        alt="Shoes"
                        className="rounded-xl h-44"
                      />
                    </figure>

                    <div className="card-body items-center text-center relative">
                      <h1 className="absolute right-1 text-4xl bottom-48 hidden lg:block">
                        {" "}
                        →
                      </h1>
                      <h2 className="card-title text-blue-500">
                        {" "}
                        <span className="text-2xl"> {location.address} </span>
                      </h2>

                      <span className="text-xl"> </span>
                      <p className="text-green-400">
                        {" "}
                        <span className="text-4xl font-semibold ">
                          300+ EV
                        </span>{" "}
                        <br /> Charging Stations
                      </p>
                      <div className="card-actions">
                        <a
                          className="btn btn-primary hover:bg-blue-700"
                          href={location.location}
                          target="_blank" // Opens the link in a new tab
                          rel="noopener noreferrer" // Recommended for security reasons
                        >
                          Find Out
                        </a>
                      </div>
                        <h1 className="text-center text-[3rem] absolute z-50 bottom-[1.5rem] right-2 p-0  lg:hidden"> →</h1>
                    </div>
                  </SwiperSlide>
                  // <div
                  //   key={index}
                  //   className="card h-[30rem]  bg-base-100 shadow-xl carousel-item w-full"
                  // >
                  //   <figure className="px- pt-10">
                  //     <img
                  //       src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/Untitled_design__2_-removebg-preview.webp?alt=media&token=11f64028-c437-410c-8ca7-aa4d212339b4"
                  //       alt="Shoes"
                  //       className="rounded-xl h-44"
                  //     />
                  //   </figure>

                  //   <div className="card-body items-center text-center relative">
                  //     <h1 className="absolute right-1 text-4xl bottom-48"> →</h1>
                  //     <h2 className="card-title text-blue-500">
                  //       {" "}
                  //       <span className="text-4xl"> {location.address} </span>
                  //     </h2>

                  //     <span className="text-xl"> </span>
                  //     <p className="text-green-400">
                  //       {" "}
                  //       <span className="text-4xl font-semibold ">
                  //         300+ EV
                  //       </span>{" "}
                  //       <br /> Charging Stations
                  //     </p>
                  //     <div className="card-actions">
                  //       <a
                  //         className="btn btn-primary hover:bg-blue-700"
                  //         href={location.location}
                  //         target="_blank" // Opens the link in a new tab
                  //         rel="noopener noreferrer" // Recommended for security reasons
                  //       >
                  //         Find Out
                  //       </a>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
