import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer";
import im1 from "../assets/all.jpg";
import im2 from "../assets/csedu2.jpg";

function About() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

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
              className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left"
            >
              <h1 className="font-semibold text-4xl">We will learn and win</h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repudiandae possimus id aliquam. Dolores ducimus, nisi doloribus atque mollitia quae beatae! Quo maxime dignissimos error harum dicta. Similique dicta necessitatibus pariatur fugiat culpa, nulla fugit repellendus, dolorum non nisi perspiciatis dolor sapiente cumque sint nihil autem modi cupiditate porro a voluptatibus? Reprehenderit nemo quam, tempore voluptatem debitis quo consequatur? Nostrum.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="200"
              data-aos-once="true"
              className="p-10 lg:p-20"
            >
              <iframe
                className="aspect-video w-full rounded-lg"
                src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <img src={im1} alt="" className="p-10 lg:p-20 rounded-lg" />
            <div className="flex flex-col p-10 lg:p-20">
              <h1 className="font-semibold text-[20px] mb-2 text-blue-800">ABOUT OUR STORY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                magnam quibusdam laborum commodi repudiandae culpa molestias
                doloribus eum aliquam pariatur? Eum eveniet possimus repudiandae
                provident tenetur quia unde vero excepturi ducimus maiores? In,
                natus inventore commodi vel officia facilis et minus provident
                tenetur cupiditate! Facere dignissimos reiciendis repellendus
                praesentium ea.
              </p>
            </div>
          </div>
        </section>
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px]">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
            <div className="flex flex-col p-10 lg:p-20">
              <h1 className="font-semibold text-[20px] mb-2 text-blue-800">ABOUT OUR TEAM</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde illo commodi assumenda, ducimus ex distinctio dolore saepe quo ipsa eaque doloribus soluta optio ratione ea debitis. Voluptatum a ratione repellendus obcaecati placeat assumenda ipsam eum neque delectus eaque est reprehenderit error, veniam quibusdam voluptas repudiandae facilis vel dolorem aut, aliquam cupiditate enim voluptatem soluta! Architecto, suscipit minima. Quaerat porro ipsa laboriosam eos harum dolorem quasi vel. Velit quas nisi cumque.
              </p>
            </div>
            <img src={im2} alt="" className="p-10 lg:p-20 rounded-lg" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
