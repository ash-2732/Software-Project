import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import FounderInfo from "./founder/FounderInfo";
import SearchStudent from "./founder/SearchStudent";
import SearchTeacher from "./founder/SearchTeacher";
import ChatBot from "./chatbot/ChatBot";
import StudentInfo from "./student/StudentInfo";
import UpdateStudentInfo from "./student/UpdateStudentInfo";
import TeacherInfo from "./teacher/TeacherInfo";
import About from "./pages/About";
import CourseDetails from "./pages/CourseDetails";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./pages/Contact";
import DisplayCourse from "./pages/DisplayCourse";
import Notes from "./pages/Notes";
import Policy from "./pages/Policy";
import DashBoard from "./founder/DashBoard";
import CreateBlog from "./founder/CreateBlog";
import Blogs from "./founder/Blogs";
import { Toaster } from "react-hot-toast";
import ShowBlogs from "./pages/ShowBlogs";
import Physics from "./SubjectPages/Physics";
import AddCourse from "./founder/AddCourse";
import AddTeacher from "./founder/AddTeacher";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chemistry from "./SubjectPages/Chemistry";
import Biology from "./SubjectPages/Biology";
import StudentCourse from "./student/StudentCourse";
import CourseContent from "./student/CourseContent";


// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51PFyofSFAqDk3KSftOx1XYejuaAWyQ3TxZ77VBpxKgHOoO3g5eaSTP6jQQKmBu1TPZczp6tnqkdms2RdfA5ZV72J00Hu2WRGZI"
);

const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <ChatBot />
      <div className="fixed left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 ">
        <Header />
      </div>
      {/* Wrap your component tree with the Elements provider */}
      <Elements stripe={stripePromise} options={options}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/displaycourse" element={<DisplayCourse />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/founderinfo" element={<FounderInfo />} />
          <Route path="/searchstudent" element={<SearchStudent />} />
          <Route path="/searchteacher" element={<SearchTeacher />} />
          <Route path="/studentinfo" element={<StudentInfo />} />
          <Route path="/updatestudentinfo" element={<UpdateStudentInfo />} />
          <Route path="/teacherinfo" element={<TeacherInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/note" element={<Notes />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/generalblog" element={<ShowBlogs />} />

          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/addteacher" element={<AddTeacher />} />

          <Route path="/physics" element={<Physics />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/biology" element={<Biology />} />

          <Route path="/studentcourses" element={<StudentCourse />} />
          <Route path="/coursecontent" element={<CourseContent/>} />

          <Route
            path="/coursedetails/:id/:name/:description/:duration/:startDate/:fees/:discount/:teacherName/:teacherCollege/:teacherUniversity/:teacherDepartment/:teacherBatch/:teacherPhone"
            element={<CourseDetails />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Elements>
    </BrowserRouter>
  );
}

export default App;
