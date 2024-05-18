import { Collapse } from "antd";
import Footer from "../components/Footer";

const Chemistry = () => {
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
      label: "Chapter 1: Introduction to Chemistry",
      children: <p className="text-blue-800">{text}</p>,
    },
    {
      key: "2",
      label: "Chapter 2: Atomic Structure",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Chapter 3: Periodic Table",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "Chapter 4: Chemical Bonding",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "Chapter 5: States of Matter",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "Chapter 6: Thermodynamics",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "Chapter 7: Equilibrium",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "Chapter 8: Redox Reactions",
      children: <p>{text}</p>,
    },
    {
      key: "9",
      label: "Chapter 9: Hydrogen",
      children: <p>{text}</p>,
    },
    {
      key: "10",
      label: "Chapter 10: The s-Block Elements",
      children: <p>{text}</p>,
    },
    {
      key: "11",
      label: "Chapter 11: The p-Block Elements",
      children: <p>{text}</p>,
    },
    {
      key: "12",
      label: "Chapter 12: Organic Chemistry",
      children: <p>{text}</p>,
    },
    {
      key: "13",
      label: "Chapter 13: Hydrocarbons",
      children: <p>{text}</p>,
    },
    {
      key: "14",
      label: "Chapter 14: Environmental Chemistry",
      children: <p>{text}</p>,
    },
    {
      key: "15",
      label: "Chapter 15: Solid State",
      children: <p>{text}</p>,
    },
    {
      key: "16",
      label: "Chapter 16: Solutions",
      children: <p>{text}</p>,
    },
    {
      key: "17",
      label: "Chapter 17: Electrochemistry",
      children: <p>{text}</p>,
    },
    {
      key: "18",
      label: "Chapter 18: Chemical Kinetics",
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
          <h1 className="font-semibold text-[30px] text-yellow-600">CHEMISTRY NOTES</h1>
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
export default Chemistry;
