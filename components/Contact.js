import Image from "next/image";

import React, { useState } from "react";
import ContactImage from "../public/assets/contact.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phoneNumber: "",
    email: "kirantripathi317@gmail.com",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);

  const checkLength = (value, key) => {
    if (value.length > 3) {
      return true;
    } else {
      setIsLoading(false);
      setError(`Invalid ${key} field`);
      return false;
    }
  };

  const checkEmail = (value, key) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) {
      console.log("passed");
      return true;
    } else {
      setIsLoading(false);
      setError(`Invalid ${key} field`);

      return false;
    }
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const { name, phoneNumber, email, subject, message } = contactData;
    // Handle form submission here (e.g., send data to server or perform an action)
    const nameValidate = checkLength(name, "name");
    const subjectValidate = checkLength(subject, "subject");
    const messageValidate = checkLength(message, "message");
    // const emailValidate = checkEmail(email, "email");

    if (nameValidate && subjectValidate && messageValidate) {
      // all validation passed then send this through mailto
      const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(message)}`;

      setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      // Open the email client after a short delay
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 100);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div id="contact" className=" w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest  uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl  shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImage}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Kiran Tripathi</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for full-time positions.Contact me and let's
                  talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4 ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400  rounded-xl lg:p-4 ">
            <h1 className="text-red-500 text-xl uppercase">{error}</h1>
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                {/* <div className="grid md:grid-cols-2 gap-4 w-full py-2"> */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    name="name"
                    onChange={handleInputChange}
                    value={contactData.name}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                {/* <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      onChange={handleInputChange}
                      value={contactData.phoneNumber}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                    
                    />
                  </div> */}
                {/* </div> */}
                {/* <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    name="email"
                    onChange={handleInputChange}
                    value={contactData.email}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div> */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    name="subject"
                    onChange={handleInputChange}
                    value={contactData.subject}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    onChange={handleInputChange}
                    value={contactData.message}
                    rows={10}
                    className="border-2 rounded-lg p-3  border-gray-300"
                    type="text"
                  />
                </div>
                <button
                  disabled={isLoading}
                  className="w-full p-4 text-gray-100 mt-4">
                  {isLoading ? "Loading..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className=" py-12 flex justify-center">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
