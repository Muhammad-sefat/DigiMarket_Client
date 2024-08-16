import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
import axios from "axios";

const Home = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3000/product");
      console.log(data);
      setDatas(data);
    };
    getData();
  }, []);
  return (
    <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {datas.map((data, index) => (
        <SingleData key={index} data={data}></SingleData>
      ))}
    </div>
  );
};

export default Home;
