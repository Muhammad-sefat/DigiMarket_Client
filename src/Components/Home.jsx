import React, { useEffect, useState } from "react";
import SingleData from "./SingleData";
import axios from "axios";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState("");
  const limit = 9;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/product?search=${searchQuery}&page=${currentPage}&limit=${limit}`
      );
      setDatas(data.data);
      setTotalPages(data.totalPages);
    };
    getData();
  }, [currentPage, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`join-item btn ${i === currentPage ? "btn-active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="my-10">
      <div className="flex justify-between">
        <div className="form-control">
          <select
            value={category}
            // onChange={handleCategoryChange}
            className="input input-bordered"
          >
            <option value="">All Categories</option>
            <option value="Mobile">Mobile</option>
            <option value="Laptop">Laptop</option>
            <option value="Computer">Computer</option>
            <option value="Tablet">Tablet</option>
            <option value="Headphones">Headphones</option>
          </select>
        </div>
        {/* Brand Filter */}
        <div className="form-control">
          <select
            value={brand}
            // onChange={handleBrandChange}
            className="input input-bordered"
          >
            <option value="">All Brands</option>
            <option value="ElectroWave">ElectroWave</option>
            <option value="TechWave">TechWave</option>
            <option value="GadgetMax">GadgetMax</option>
            <option value="SoundCore">SoundCore</option>
            <option value="InnoVision">InnoVision</option>
          </select>
        </div>
        {/* Price Range Filter */}
        <div className="form-control">
          <select
            value={priceRange}
            // onChange={handlePriceRangeChange}
            className="input input-bordered"
          >
            <option value="">All Prices</option>
            <option value="0-100">$0 - $100</option>
            <option value="101-300">$101 - $300</option>
            <option value="301-500">$301 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>
        {/* Sorting */}
        <div className="form-control">
          <select
            value={sortOption}
            // onChange={handleSortChange}
            className="input input-bordered"
          >
            <option value="">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="date-desc">Date Added: Newest First</option>
          </select>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((data, index) => (
          <SingleData key={index} data={data}></SingleData>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-primary mr-2"
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="btn btn-primary ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
