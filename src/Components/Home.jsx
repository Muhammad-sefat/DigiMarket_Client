import React from "react";
import datas from "../../public/data.json";
import SingleData from "./SingleData";

const Home = () => {
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {datas.map((data, index) => (
        <SingleData key={index} data={data}></SingleData>
      ))}
    </div>
  );
};

export default Home;
