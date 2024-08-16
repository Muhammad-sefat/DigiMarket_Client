import React from "react";
import datas from "../../public/data.json";
import SingleData from "./SingleData";

const Home = () => {
  return (
    <div className="my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {datas.map((data, index) => (
        <SingleData key={index} data={data}></SingleData>
      ))}
    </div>
  );
};

export default Home;
