import React from "react";

// Banner Component
const Banner = () => {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Cake Store</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Pick you favorite
          </p>
        </div>
      </div>
    </header>
  );
};

export default Banner;
