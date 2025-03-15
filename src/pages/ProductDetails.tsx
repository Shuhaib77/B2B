import React from "react";
import Header from "../components/Header";
import Review from "../components/Review";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate=useNavigate()
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="">
        <div className="flex w-[100vw] h-[95vh] gap-x-5  items-center p-15">
          <div className="w-1/2 bg-blue-400 h-full  p-2     ">
            <div className="flex h-full">
              <div className=" w-1/2  grid grid-cols-1 gap-y-3 overflow-auto">
                <div className="w-full h-[300px] bg-green-300 "></div>
                <div className="w-full h-[300px] bg-green-300 "></div>
                <div className="w-full h-[300px] bg-green-300 "></div>
                <div className="w-full h-[300px] bg-green-300 "></div>
              </div>
              <div className="w-full  bg-amber-200 ">
                <h1>efrf</h1>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col p-5 gap-y-3   ">
            <div className=" h-1/3  pl-5 pr-5 border-b-2">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold">yhy6hyhvuhy</h1>
                <h1>hiii</h1>
              </div>
              <h1>tg5ygy</h1>
              <h1>yhy6hyhvuhy</h1>
            </div>
            <div className=" h-1/2 flex flex-col gap-y-4">
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also
              </h1>
              <h1>tg5ygy</h1>
              <h1>tg5ygy</h1>
              <h1>tg5ygy</h1>
            </div>
            <div className=" h-1/3">
              <div className="flex ">
                <button className="w-52 rounded-3xl  border " onClick={()=>{
                  navigate("/cart")
                }}>
                  Add to cart
                </button>
                <div className="w-28 rounded-3xl p-1 border ml-5 flex items-center justify-between  ">
                  <button className="w-full">+</button> <span>0</span>{" "}
                  <button className="w-full">-</button>
                </div>
              </div>
              <button className="w-86 rounded-3xl p-1 border mt-3 ">Buy Now</button>
           <div className="mt-5">
           <h1>deliver in  3day </h1>
           <h1>dno shipping charge  </h1>
           </div>
            </div>
          </div>
        </div>
      </div>
     <Review/>
     <div>
      <Footer/>
     </div>
    </>
  );
}

export default ProductDetails;
