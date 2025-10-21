import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import emailjs from "@emailjs/browser";
function ContactFoam() {
  // emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", "#myForm").then(
  //   (response) => {
  //     console.log("SUCCESS!", response.status, response.text);
  //   },
  //   (error) => {
  //     console.log("FAILED...", error);
  //   }
  // );
  const [contactForm, setcontactForm] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    message: "",
  });

  // Step 2: Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // console.log("", name, value);
    setcontactForm({
      ...contactForm, // keep old values
      [name]: value, // update only the changed field
    });
  };
  console.log("LastName", contactForm.lastName);
  return (
    <>
      {/* main card */}
      <div className="relative  z-10 bg-[#FFF9EF] shadow-xl rounded-3xl">
        {/* Top Right Clip Shape */}
        <div
          className="absolute top-0 right-0 bg-primary rounded-3xl w-[400px] lg:w-[500px] h-[400px]"
          style={{
            clipPath: "polygon(100% 0, 83% 0, 100% 19%)",
          }}
        />
        {/* bottom left Clip Shape*/}
        <div
          className="absolute  rounded-3xl bottom-0 left-0 bg-primary w-[300px] md:w-[450px] lg:w-[500px] h-[400px]"
          style={{
            clipPath: "ellipse(62% 8% at 2% 100%)",
          }}
        />
        <div className="p-10">
          <h1 className="poppins-bold text-2xl">Send Your</h1>
          <h1 className="poppins-bold text-2xl">Message To Us</h1>
          <form className="grid grid-cols-1 sm:grid-cols-2 pt-5 gap-5">
            {/* first  */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md"
                type="text"
                name="firstName"
                value={contactForm.firstName}
                onChange={handleChange}
                placeholder="First Name:"
              />
            </div>
            {/* last name */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md"
                type="text"
                name="lastName"
                value={contactForm.lastName}
                onChange={handleChange}
                placeholder="Last Name:"
              />
            </div>
            {/* contact */}
            <div className="">
              <input
                className="px-5 py-[10px] rounded-md"
                type="text"
                name="contact"
                value={contactForm.contact}
                onChange={handleChange}
                placeholder="Contact Num:"
              />
            </div>
            {/* email */}
            <div className="">
              <input
                name="email"
                value={contactForm.email}
                onChange={handleChange}
                className="px-5 py-[10px] rounded-md"
                type="text"
                placeholder="Email Address:"
              />
            </div>
            {/* message */}
            <div className="md:col-span-2">
              <textarea
                placeholder="Message...."
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                rows={5}
                className="p-4 rounded-lg border-none outline-none bg-white shadow-sm w-full md:col-span-2"
              ></textarea>
            </div>
            {/* button */}
            <div className="relative flex  justify-end md:col-span-2">
              <button className="text-left pl-3 w-[35%] lg:w-1/6 py-1 poppins-semibold bg-gradient-to-r from-[#D7AA4D] to-[#D49237] transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer rounded-lg">
                Send
              </button>
              <div className="absolute right-2 top-[6px] bg-black rounded-full">
                <ChevronRight color="white" size={20} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactFoam;
