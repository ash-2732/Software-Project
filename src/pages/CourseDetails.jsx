import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import { Modal } from "antd";
import PaymentForm from "../Form/PaymentForm";
import { useSelector } from "react-redux";
import im1 from "../assets/Smarthphone.png";
import im3 from "../assets/Record.png";
import Slick from "./Slick";

function CourseDetails() {
  const { currentUser } = useSelector((state) => state.user);
  const params = useParams();
  const [visible, setVisible] = useState(false);
  const [anotherVisible, setAnotherVisible] = useState(false);

  return (
    <>
      <main className="">
        <section className="bg-[#f3f5f9]">
          <div className="pt-20 flex max-w-7xl p-3 mx-auto flex-col md:flex-row gap-4">
            <div className="md:w-1/2 group group/item w-[320px] p-[20px] bg-white rounded-[10px] border-gray-100 border-r-2">
              <img src={im3} alt="" />
              <h1 className="text-center font-bold">COURSE NAME</h1>
              <h1 className="text-xl font-semibold text-blue-800 text-center">
                {params.name}
              </h1>
              <span className="flex justify-between items-center gap-4 border-t-[2px] mt-3">
                <h1 className="text-[16px] font-semibold text-black mt-2">
                  {params.description}
                </h1>
              </span>
              <div className="flex justify-between border-t-[1px] mt-3 ">
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">Duration</h1>
                  <h1>{params.duration} hours</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">StartDate</h1>
                  <h1>{params.startDate}</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-[1px] mt-3 ">
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">Fees</h1>
                  <h1>{params.fees} TK</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">Discount</h1>
                  <h1>{params.discount}</h1>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-blue-800 text-center">
                  COURSE DETAILS
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptate quod nostrum minima dolorum quasi consequuntur
                  perferendis maxime officiis quae ut tempora aut, nobis ullam
                  aspernatur iste illo. Minus, labore deserunt!
                </p>
              </div>
            </div>
            <div className="md:w-1/2 group group/item w-[320px] p-[20px] bg-white rounded-[10px] border-gray-100 border-l-2">
              <h1 className="text-center font-semibold text-[25px]">
                COURSE CONDUCTED BY TEACHER
              </h1>
              <h1 className="text-xl font-semibold text-blue-800 text-center">
                TEACHER NAME: {params.teacherName}
              </h1>
              <span className="flex justify-between items-center gap-4 border-t-[2px] mt-3">
                <h1 className="text-[16px] font-semibold text-black mt-2">
                  COLLEGE NAME: {params.teacherCollege}
                </h1>
              </span>
              <div className="flex justify-between border-t-[1px] mt-3 ">
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">UNIVERSITY</h1>
                  <h1>{params.teacherUniversity}</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">DEPARTMENT</h1>
                  <h1>{params.teacherDepartment}</h1>
                </div>
              </div>
              <div className="flex justify-between border-t-[1px] mt-3 ">
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">BATCH</h1>
                  <h1>{params.teacherBatch}</h1>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-semibold">PHONE</h1>
                  <h1>{params.teacherPhone}</h1>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="button"
                  className="bg-[#6343a6] text-white w-full p-2 rounded-md font-semibold hover:bg-[#c84bae]"
                  onClick={() => {
                    currentUser ? setVisible(true) : setAnotherVisible(true);
                  }}
                >
                  ENROLL NOW
                </button>
              </div>

              <div className="order-1 mt-[50px]">
                <h1 className="text-center font-bold">
                  SEE THIS VIDEO HOW TO BUY THIS COURSE
                </h1>
                <iframe
                  className="aspect-video w-full mt-5"
                  src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div>
              <Modal
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
              >
                <PaymentForm id ={params.id}/>
              </Modal>
            </div>
            <div>
              <Modal
                visible={anotherVisible}
                onCancel={() => setAnotherVisible(false)}
                footer={null}
              >
                <h1 className="text-center text-2xl text-red-500 font-semibold mb-2">
                  PLEASE LOGIN FIRST
                </h1>
                <hr />
                <h3 className="text-center text-xl mt-4 font-semibold">
                  If You want to enroll our courses then you have to login first
                  🙂
                </h3>
              </Modal>
            </div>
          </div>
        </section>

        <section>
          <div className="p-4">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#1B223C] dark:bg-gray-800">
                <p className="text-2xl text-white dark:text-gray-500">
                  <h1 className="font-semibold text-[40px]">
                    Choose our Batch time
                  </h1>
                </p>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-blue-800 dark:text-white">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <div className="">☀️</div>
                      <div className="flex flex-col">
                        <h1>Batch-1</h1>
                        <h1>7:00 AM - 8:00 AM</h1>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-blue-800 dark:text-white">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <div className="">⛅</div>
                      <div className="flex flex-col">
                        <h1>Batch-2</h1>
                        <h1>10:00 AM - 11:00 AM</h1>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-blue-800 dark:text-white">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <div className="">🌤️</div>
                      <div className="flex flex-col">
                        <h1>Batch-3</h1>
                        <h1>4:00 PM - 5:00 PM</h1>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                  <p className="text-2xl text-blue-800 dark:text-white">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <div className="">🌙</div>
                      <div className="flex flex-col">
                        <h1>Batch-4</h1>
                        <h1>7:00 PM - 8:00 PM</h1>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] bg-[#f3f5f9]">
          <div className="grid grid-cols-1 items-center gap-3 dark:text-white md:grid-cols-2">
            <img src={im1} alt="" className="p-10 lg:p-05 rounded-lg" />
            <div className="flex flex-col p-10 lg:p-20">
              <h1 className="font-semibold text-[25px] mb-2 text-blue-800">YOU CAN CALL US FOR YOUR HELP</h1>
              <p className="font-semibold text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste distinctio quisquam aperiam. Reprehenderit unde nihil dolore laudantium repudiandae quibusdam dolor deleniti nostrum atque molestiae ad assumenda odio, repellendus repellat quaerat vitae perferendis. Quod distinctio eveniet odit minus voluptatum nobis quasi placeat ut accusamus, molestiae officiis delectus beatae saepe? Nam ex sed modi omnis veritatis eligendi nisi molestiae distinctio a animi.
              </p>
            </div>
          </div>
        </section>

        <section className="home-third">
          <h1 className="text-center font-semibold text-[25px] text-blue-800 p-10">STUDENT COMMENT ABOUT OUR COURSES</h1>
        <Slick />
        </section>

        <div className="">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default CourseDetails;
