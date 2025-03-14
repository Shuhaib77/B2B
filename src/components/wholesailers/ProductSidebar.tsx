import React from 'react'

function ProductSidebar() {
  return (
    <div className="sticky top-0  ">
    <div className="lg:w-[20vw] h-[70vh]  rounded-b-sm shadow-xl p-10 flex flex-col gap-y-15 overflow-auto  sm:w-full">
      <div className=" w-full h-1/2 border p-5 ">
        <div>
          <h1>catogery</h1>
          <input type="checkbox" value={"women"}
          //  onChange={handleChange}
            />
          <label className="ml-4 text-sm" htmlFor="">
            women
          </label>
        </div>
        <div>
          <input type="checkbox" value={"men"}
          //  onChange={handleChange}
            />
          <label className="ml-4 text-sm" htmlFor="">
            Men
          </label>
        </div>
      </div>

      <div className="w-full h-1/2 border p-5 ">
        <div>
          <h1>sorting</h1>
          <input
            type="radio"
            value={"higtolow"}
            name="sort"
            // onChange={handleSort}
          />
          <label className="ml-4 text-sm" htmlFor="">
            hig-tolow
          </label>
        </div>
        <div>
          <input
            type="radio"
            value={"lawtohig"}
            name="sort"
            // onChange={handleSort}
          />
          <label className="ml-4 text-sm" htmlFor="">
            law-tohig
          </label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductSidebar