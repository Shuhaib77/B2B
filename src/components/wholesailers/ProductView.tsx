import React from "react";

function ProductView() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-5">
        <div>
            <h1 className="text-xl font-bold ">Our Collection Of Products</h1>
          <input
            type="text"
            className="w-full border rounded-3xl p-2 mt-5"
            placeholder="Search"
            // onChange={handleSearch}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Explore Products</h1>
          <h1 className="font-light">SHOES COLLECTION</h1>
        </div>

        <div className="w-full grid shadow-xl rounded-2xl p-5 grid-cols-1 gap-y-5 lg:grid-cols-3 sm:gap-y-5 place-items-center ">
          {/* {sortedProducts.length ? (
          sortedProducts.map((item) => ( */}
          <div
            
            className="lg:w-[250px]  lg:h-[330px] bg-gray-200 p-3 overflow-auto"
          >
            <div className="bg-red-600 rounded w-full h-[240px]">
              <img className="w-full h-full object-cover" src="" alt="" />
            </div>
            <div className="pl-2">
              <h1>{/* {item?.price} */}</h1>
              <h1>{/* {item?.brand} */}</h1>
              {/* <h1>{highlightText(item.title, search)}</h1> */}
              <h1>{/* {item?.catogery} */}</h1>
            </div>
          </div>
          {/* )) */}
          {/* ) : ( */}
          <p>No products found</p>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default ProductView;
