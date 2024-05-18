import { Card } from "antd";
import im1 from "../assets/BLOG.png";


function CourseContent() {
  return (
    <>
      <div className="pt-20">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-10">
            <Card
              hoverable
              style={{
                width: 440,
              }}
              cover={
                <img
                  alt="example"
                  src={im1}
                />
              }
            ></Card>
            <Card
              hoverable
              style={{
                width: 440,
              }}
              cover={
                <img
                  alt="example"
                  src={im1}
                />
              }
            ></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
