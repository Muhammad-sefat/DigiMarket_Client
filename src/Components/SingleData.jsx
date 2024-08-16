import React from "react";
import Rating from "react-rating-stars-component";

const SingleData = ({ data }) => {
  return (
    <div className="my-8">
      <div className="card bg-base-100 shadow-xl h-full transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure>
          <img src={data.image} alt="Shoes" />
        </figure>
        <div className="text-left pt-4">
          <Rating
            count={5}
            value={data.rating}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
          <h2 className="card-title text-2xl">{data.name}</h2>
          <p className="text-gray-600">{data.description}</p>
          <div className="flex items-center justify-between my-3">
            <p className="text-base font-semibold">
              <span className="text-lg">Price</span> : ${data.price}
            </p>
            <p className="text-base font-semibold">
              <span className="text-lg">Category</span> : {data.category}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold mb-3">
              <span className="text-lg">Brand</span> : {data.brand}
            </p>
            <p className="text-base font-semibold">
              <span className="text-lg">Date </span>: {data.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
