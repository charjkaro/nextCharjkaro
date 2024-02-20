"use client";

import Image from "next/image";
import { handleSubmit } from "./handleSubmit";
import { handleNewsLetter } from "@/app/action/handleNewsLetter";

const Footer = () => {
  const handleSubmit = async (event) => {
    // event.preventDefault();

    // const formData = {
    //   email: event.target.elements.email.value,
    // };
    // try {
    //   const response = await fetch("/api/newsletter", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   if (!response.ok) {
    //     alert(`HTTP error! status: ${response.status}`)
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const data = await response.json();

    //   event.target.reset();
    // } catch (error) {
    //   console.error("something is wrong");
    // }

    // alert("Thank you for signing up for newsletter");
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = await handleNewsLetter
    (Object.fromEntries(formData));
    // console.log(data);
    event.target.reset();
    alert("Thank you!!");
  };

  return (
    <div className="  bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center">
      <div className="md:px-30 justify-between rounded-3xl rounded-b-none  bg-cover bg-no-repeat p-10 font-poppins text-white md:flex">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/logowhite-removebg-preview.png?alt=media&token=2f63e764-5a4c-474a-a081-5c234e2bf01d"
          alt=""
          width={400} height={10}
          className="  md:w-[15rem ] md:h-[15rem] "
        />
        <div className="flex flex-col items-start">
          <p className="py-2 text-3xl font-bold">Contact info</p>

          <div className="py-2">
            <p className="text-2xl font-bold">Call us</p>
            <a href="tel:18002034044">1800 203 4044</a> <br />
          </div>
          <div className="py-2">
            <p className="text-2xl font-bold">Email</p>
            <a href="mailto:info@charjkaro.com">
              <p>info@charjkaro.com</p>
            </a>
          </div>

          <div className="py-2">
            <p className="text-2xl font-bold max-w-96">Location</p>
            1103, World Trade Tower, <br /> DND Flyway, <br /> Sector 16 Noida,{" "}
            <br /> Uttar Pradesh, 201301
          </div>
        </div>
        <div className="md:w-1/4">
          <p className=" text-2xl font-bold">Newsletter signup</p>
          <form
            netlify="true"
            onSubmit={handleSubmit}
            type="email"
            className="md:w-48 w-full"
          >
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="block w-[100%] rounded border border-gray-300 bg-transparent p-2"
            />
            <button
              type="submit"
              className="mt-2 w-[100%] rounded bg-green-600 p-2 text-white"
            >
              Submit
            </button>
          </form>
          <p className="my-10">
            Sign up to our monthly newsletter for useful articles, tips and
            tricks
          </p>
          <div className="flex gap-2 invert">
            <a
              href=" https://www.facebook.com/profile.php?id=100093408431168"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30}
                src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/meta-512.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href=" https://www.instagram.com/_charjkaro_/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30}
                src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href=" https://www.linkedin.com/company/96009890/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30}
                src="https://cdn4.iconfinder.com/data/icons/social-icons-16/512/LinkedIn_alt-512.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href="https://twitter.com/charjkaro"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30}
                src="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCUDXyzulIrLaMbV6v9_iJyA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image width={30} height={30}
                src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-256.png"
                className="w-6 transition-transform duration-200 ease-in-out hover:translate-x-2 hover:scale-95"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} CharjKaro. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
