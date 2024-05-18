import Slider from "react-slick";

function Slick() {
  const data = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima aliquid non culpa fuga vitae autem tempore delectus et magni, eaque officia odit. Optio nostrum  ",
      name: "Tahsin Ahmed",
      school: "Mintu College",
      class: "class 10",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima aliquid non culpa fuga vitae autem tempore delectus et magni, eaque officia odit. Optio nostrum ",
      name: "Sakib Ahmed",
      school: "Rajshahi School",
      class: "class 10",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima aliquid non culpa fuga vitae autem tempore delectus et magni, eaque officia odit. Optio nostrum ",
      name: "Abir Ahmed",
      school: "Police Line School",
      class: "class 9",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima aliquid non culpa fuga vitae autem tempore delectus et magni, eaque officia odit. Optio nostrum ",
      name: "Ashik Ahmed",
      school: "New Model School",
      class: "class 8",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima aliquid non culpa fuga vitae autem tempore delectus et magni, eaque officia odit. Optio nostrum ",
      name: "Joy Mitra",
      school: "Sylhet School",
      class: "class 7",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="App p-10">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="card shadow-lg">
              <div className="flex flex-col">
                <div className="p-8 font-semibold text-[16px] text-gray-800">
                  <h1>{item.title}</h1>
                </div>
                <div className="card-bottom p-8 text-blue-800">
                  <h3>{item.name}</h3>
                  <h3>{item.school}</h3>
                  <h3>{item.class}</h3>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Slick;
