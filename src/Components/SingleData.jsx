import React from "react";

const SingleData = ({ data }) => {
  console.log(data.image);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <p>Price : ${data.price}</p>
          <p>Brand : {data.brand}</p>
          <p>Date : {data.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
