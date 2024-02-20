// import { db } from "../../config/firebase";
"use client";

import { handleContactForm } from "../action/handleContactForm";

const ContactForm = () => {
  // const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     const formData = {
  //         name: event.target.elements.name.value,
  //         email: event.target.elements.email.value,
  //         phone: event.target.elements.phone.value,
  //         company: event.target.elements.company.value,
  //         message: event.target.elements.message.value
  //     };

  //     try {
  //         const response = await axios.post('/api/hello', formData);

  //         event.target.reset();
  //     } catch (error) {
  //         console.error(error);
  //     }
  // };

  const handleSubmit = async (event) => {
    // event.preventDefault();

    // const formData = {
    //   name: event.target.elements.name.value,
    //   email: event.target.elements.email.value,
    //   phone: event.target.elements.phone.value,
    //   company: event.target.elements.company.value,
    //   message: event.target.elements.message.value,
    // };

    // try {
    //   const response = await fetch("/api/hello", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   const data = await response.json();

    //   event.target.reset();
    // } catch (error) {
    //   console.error("something went wrong");
    // }
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = await handleContactForm(Object.fromEntries(formData));
    // console.log(data);
    event.target.reset();
    alert("Thank you!!");
  };

  return (
    <div>
      <div className="form lg:p-10  bg-[url('https://firebasestorage.googleapis.com/v0/b/charjkaro-7a3bc.appspot.com/o/ground.png?alt=media&token=4ad5b176-5662-4baa-80cd-9e59af8f20cb')] bg-cover bg-center rounded-3xl m-2">
        <h1 className="py-10 text-center font-poppins text-4xl lg:text-6xl font-semibold text-white ">
          Contact us
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap justify-evenly">
          <form
            action=""
            onSubmit={handleSubmit}
            netlify="true"
            className="w-full lg:w-1/2 p-5"
          >
            <div className="flex-wrap items-center justify-center gap-5 md:flex">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
              />
              <input
                type="number"
                required
                placeholder="Phone no"
                name="phone"
                className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
              />
              <input
                type="text"
                placeholder="Company name"
                required
                name="company"
                className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[40%]"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                cols="30"
                rows="6"
                className="mb-4 w-[100%] rounded-xl border-2 border-gray-600 p-3 md:w-[80%]"
              ></textarea>
            </div>
            <div className="my-10 text-center">
              <button className="rounded-full btn  bg-blue-600 border-2  px-16 text-xl text-white">
                Submit
              </button>
            </div>
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7502247500515!2d77.31654360368043!3d28.577262198485585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce458d0000001%3A0x9064b4887407e79a!2sCASHurDRIVE%20Marketing%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1702372122320!5m2!1sen!2sin"
            className="w-full lg:w-1/2 rounded-3xl border-4 border-white"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
