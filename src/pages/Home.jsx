import Banner from "../components/Banner";
import BannerVideo from "../components/BannerVideo";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import im1 from "../assets/Study Plan.png";
import im2 from "../assets/video_play.svg";
import { Modal } from "antd";
import { useState } from "react";
import im3 from "../assets/Record.png";
import im4 from "../assets/Animated video.png";
import im5 from "../assets/Class Note.png";
import im6 from "../assets/smart note.png";
import im7 from "../assets/teachers.png";
import TestimonialCard from "./TestimonialCard";


function Home() {
  const [visible, setVisible] = useState(false);

  const [currentImage, setCurrentImage] = useState(im3);

  const changeImage = (image) => {
    setCurrentImage(image);
  }
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  //bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950
  return (
    <>
      <main className="">
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] bg-[#1B223C]">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
            >
              <h1 className=" text-4xl ">Welcome to our Platform</h1>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis quae a totam, eaque, eum eius vel nam aut minus esse
                modi voluptatum sequi facere error eligendi recusandae dolorum
                tempore voluptas.
              </p>
              <div className="space-x-4">
                <Link to={"/displaycourse"}>
                  <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                    SEE OUR COURSES
                  </button>
                </Link>
                <a
                  href="https://youtube.com/@abdullahashik8005?si=BBDKMemkZJ8n00gV"
                  target="_blank"
                >
                  <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                    LEARN WITH US
                  </button>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className="mx-auto max-w-xs p-4"
            >
              <img
                src="https://wallpapers.com/images/hd/education-pictures-xyey2i1o3525q922.jpg"
                alt="No image"
                className="hover:drop-shadow-md rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="container flex h-[750px] flex-col items-center justify-center md:h-[500px] lg:p-20 bg-slate-100">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1 className="text-center font-semibold text-[30px] text-blue-800">
                OUR FEATURES FOR YOUR BETTERMENT
              </h1>
              <p className="text-center font-semibold">
                Follow this rules to maintain your study regularly
              </p>
              <div className="grid grid-cols-1 items-center gap-2 dark:text-white md:grid-cols-2">
                <div className="group group/item w-[300px] p-[20px] first rounded-[10px] cursor-pointer text-white">
                  <h1 className="font-semibold text-[18px]">Practice more and more</h1>
                </div>
                <div className="group group/item w-[300px] p-[20px] second rounded-[10px] cursor-pointer text-white">
                  <h1 className="font-semibold text-[18px]">Study regulary and timely</h1>
                </div>
                <div className="group group/item w-[300px] p-[20px] third rounded-[10px] cursor-pointer text-white">
                  <h1 className="font-semibold text-[18px]">Study with full attention</h1>
                </div>
                <div className="group group/item w-[300px] p-[20px] four rounded-[10px] cursor-pointer text-white">
                  <h1 className="font-semibold text-[18px]">Dont waste much time</h1>
                </div>
                <div className="group group/item w-[300px] p-[20px] five rounded-[10px] cursor-pointer text-white">
                  <h1 className="font-semibold text-[18px]">
                    Give exam for better preparation
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-[40%] left-[40%]">
                <img
                  src={im2}
                  alt=""
                  className="p-2 cursor-pointer"
                  height={"100px"}
                  width={"100px"}
                  onClick={() => {
                    setVisible(true);
                  }}
                />
              </div>
              <img src={im1} alt="" className="rounded-lg p-5" />
            </div>
          </div>
          <div className="">
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
              className="w-full h-full"
            >
              <iframe
                className="aspect-video w-full rounded-lg mt-5"
                src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </section>
        <section className="container flex h-[750px] flex-col items-center justify-center md:h-[700px] lg:p-20 home-third">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="p-2 w-1/2">
              <div className="flex flex-col gap-4">
                <button className="group group/item w-[350px] border border-pink-600 bg-white p-[20px]  rounded-[10px] cursor-pointer text-black hover:-translate-y-1 hover:transition-all" onClick={() => changeImage(im3)}>
                  <h1 className="font-semibold text-[18px] text-gray-800">Recorder class</h1>
                </button>
                <button className="group group/item w-[350px] border border-pink-600 bg-white p-[20px]  rounded-[10px] cursor-pointer text-black hover:-translate-y-1 hover:transition-all" onClick={() => changeImage(im4)}>
                  <h1 className="font-semibold text-[18px] text-gray-800">Animated video</h1>
                </button>
                <button className="group group/item w-[350px] border border-pink-600 bg-white p-[20px]  rounded-[10px] cursor-pointer text-black hover:-translate-y-1 hover:transition-all" onClick={() => changeImage(im5)}>
                  <h1 className="font-semibold text-[18px] text-gray-800">Class note</h1>
                </button>
                <button className="group group/item w-[350px] border border-pink-600 bg-white p-[20px]  rounded-[10px] cursor-pointer text-black hover:-translate-y-1 hover:transition-all" onClick={() => changeImage(im6)}>
                  <h1 className="font-semibold text-[18px] text-gray-800">Smart note</h1>
                </button>
                <button className="group group/item w-[350px] border border-pink-600 bg-white p-[20px]  rounded-[10px] cursor-pointer text-black hover:-translate-y-1 hover:transition-all" onClick={() => changeImage(im7)}>
                  <h1 className="font-semibold text-[18px] text-gray-800">Well Trained Teachers</h1>
                </button>
              </div>
            </div>
            <div className="w-full">
              <img src={currentImage} alt="" className="rounded-lg" />
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-center font-semibold text-[30px] text-blue-800 mt-10">STUDENT EXPERIENCE</h1>
          <h1 className="text-center font-semibold text-[18px] text-blue-800">What they have told about us</h1>
          <TestimonialCard />
        </section>
      </main>
      <Banner />
      <Banner reverse={true} />
      <BannerVideo />
      <Footer />
    </>
  );
}

export default Home;
