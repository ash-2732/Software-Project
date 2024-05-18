import { Collapse } from "antd";
import Footer from "../components/Footer";

const Physics = () => {
  const text = `
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod alias
            dolore esse! Unde, ab quasi. Sed, mollitia sequi. Soluta molestias
            placeat earum ea eligendi cum iusto laudantium. Dolore, cumque. Quam
            vitae repudiandae consequuntur assumenda labore hic, libero corrupti
            beatae odit! Dignissimos accusamus ipsa voluptatum officiis deleniti
            iure unde porro consequuntur. Suscipit repudiandae eum, quos
            nesciunt esse nobis consequatur incidunt praesentium fugiat animi
            inventore voluptatem qui similique, tempora aliquam velit! Velit
`;
  const items = [
    {
      key: "1",
      label: "Chapter 1: Introduction to Physics",
      children: <p className="text-blue-800">{text}</p>,
    },
    {
      key: "2",
      label: "Chapter 2: Motion in a Straight Line",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Chapter 3: Motion in a Plane",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Chapter 4: Laws of Motion",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "Chapter 5: Work, Energy, and Power",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "Chapter 6: System of Particles and Rotational Motion",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "Chapter 7: Gravitation",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "Chapter 8: Mechanical Properties of Solids",
      children: <p>{text}</p>,
    },
    {
      key: "9",
      label: "Chapter 9: Mechanical Properties of Fluids",
      children: <p>{text}</p>,
    },
    {
      key: "10",
      label: "Chapter 10: Thermal Properties of Matter",
      children: <p>{text}</p>,
    },
    {
      key: "11",
      label: "Chapter 11: Thermodynamics",
      children: <p>{text}</p>,
    },
    {
      key: "12",
      label: "Chapter 12: Kinetic Theory",
      children: <p>{text}</p>,
    },
    {
      key: "13",
      label: "Chapter 13: Oscillations",
      children: <p>{text}</p>,
    },
    {
      key: "14",
      label: "Chapter 14: Waves",
      children: <p>{text}</p>,
    },
    {
      key: "15",
      label: "Chapter 15: Ray Optics and Optical Instruments",
      children: <p>{text}</p>,
    },
    {
      key: "16",
      label: "Chapter 16: Wave Optics",
      children: <p>{text}</p>,
    },
    {
      key: "17",
      label: "Chapter 17: Dual Nature of Radiation and Matter",
      children: <p>{text}</p>,
    },
    {
      key: "18",
      label: "Chapter 18: Atoms",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className="pt-20 ml-10 mr-10">
        <div>
          <h1 className="font-semibold text-[30px] text-amber-950">PHYSICS NOTES</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod alias
            dolore esse! Unde, ab quasi. Sed, mollitia sequi. Soluta molestias
            placeat earum ea eligendi cum iusto laudantium. Dolore, cumque. Quam
            vitae repudiandae consequuntur assumenda labore hic, libero corrupti
            beatae odit! Dignissimos accusamus ipsa voluptatum officiis deleniti
            iure unde porro consequuntur. Suscipit repudiandae eum, quos
            nesciunt esse nobis consequatur incidunt praesentium fugiat animi
            inventore voluptatem qui similique, tempora aliquam velit! Velit
            nihil tenetur quia vel deserunt, placeat qui quisquam doloremque
            neque, aut magnam atque similique quae ipsam praesentium, assumenda
            enim quibusdam id? Repudiandae aliquam error sed consequuntur eaque
            deserunt natus nisi?
          </p>
        </div>
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} 
        className="mt-10 mb-5"/>
      </div>
      <Footer />
    </>
  );
};
export default Physics;
