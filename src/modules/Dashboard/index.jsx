import { AiOutlineDollarCircle } from "react-icons/ai";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiMoney } from "react-icons/bi";
import { TbShoppingBag } from "react-icons/tb";

import Card from "./Card";
import Table from "./Table";
import Section from "./Section";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  const cardList = [
    {
      label: "Earning",
      icon: <AiOutlineDollarCircle />,
      color: "bg-green-100 text-green-700",
      amount: 198,
      rate: 37.8,
    },
    {
      label: "Orders",
      icon: <CgLoadbarDoc />,
      color: "bg-violet-100 text-violet-700",
      amount: 2.4,
      rate: 2,
    },
    {
      label: "Balance",
      icon: <BiMoney />,
      color: "bg-blue-100 text-blue-700",
      amount: 2.4,
      rate: 2,
    },
    {
      label: "Total Sales",
      icon: <TbShoppingBag />,
      color: "bg-pink-100 text-pink-700",
      amount: 89,
      rate: 11,
    },
  ];

  return (
    <section className="flex justify-start flex-col h-screen w-full overflow-scroll py-4 px-8">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:flex-row flex-wrap">
        {cardList.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <Section />
      </div>
      <Table />
    </section>
  );
};

export default Dashboard;
