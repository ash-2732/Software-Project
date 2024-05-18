import Footer from "../components/Footer";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sfisczn", "template_nmyik79", form.current, {
        publicKey: "bRUDvUqgdhnW6DNzn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("EMAIL SENT SUCCESSFULLY");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("EMAIL NOT SENT", error.text);
        }
      );
  };
  return (
    <>
      <main className="bg-slate-100 pt-20">
        <div>
          <h1 className="text-center font-semibold text-[25px] text-blue-800 mb-6">
            YOU CAN SEE OUR LOCATION IN GOOGLE MAP
          </h1>
          <iframe
            className="w-full h-[500px] m-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.728390416138!2d90.35875180923556!3d23.757063178576797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeaac77cf97%3A0x56e8b5892d7e73df!2sMohammadpur%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1714284742031!5m2!1sen!2sbd"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <section className="lg:w-[100%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-6 pt-[20px] pb-2 gap-10">
          <div
            data-aos="zoom-in"
            className="bg-white p-10 flex flex-col justify-center items-start gap-4 rounded-xl
            border border-r-2 "
          >
            <h1 className="text-2xl text-black font-semibold text-center">
              SEND US A MESSAGE TODAY
            </h1>
            <form
              action=""
              className="w-full flex flex-col gap-3"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
              <button
                className="bg-blue-800 px-8 py-3 tex-md text-white rounded-xl w-full font-semibold hover:bg-black cursor-pointer"
                type="submit"
              >
                SEND EMAIL
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-start gap=8 lg:p-20 p-6">
            <h1
              data-aos="zoom-in"
              data-aos-delay="200"
              className="text-blue-800 font-semibold text-center text-[30px]"
            >
              REACH US
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-gray-800 text-[18px] font-semibold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem facilis perferendis nesciunt ipsum cumque, quis
              velit sit repellendus eveniet eligendi maxime excepturi, sapiente
              ab voluptates dolore, vitae facere dignissimos quaerat dicta
            </h1>
            <h1 className="mt-3 font-bold mb-3">Contact With Us</h1>
            <p>📱01792370198</p>
            <p className="mt-3">
              <BiMailSend /> www.ashik.com
            </p>
            <p className="mt-3">
              <BiPhoneCall /> 01792370198
            </p>
            <p className="mt-3">
              <BiSupport /> 1800-0000-0000 (toll free)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
