import React, { useState } from "react";
import { Collapse } from "@material-tailwind/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Cart() {

    const navigate=useNavigate()
  return (
    <>
      <Header />
      <div className="flex justify-center gap-5 p-5">
        <div className="w-1/2 h-full">
          <table className="border border-gray-300 w-full shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-300">
                <td className="px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <i className="fa-solid fa-xmark fa-xl cursor-pointer text-red-500"></i>
                    <div className="w-[50px] bg-black h-[50px]"></div>
                    <span>3edrf</span>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">34567</td>
                <td className="px-4 py-2 ">
                  <div className="flex items-center justify-center border border-gray-300 rounded-lg p-1 w-full">
                    <button className="   rounded">-</button>
                    <span className="mx-2">quantity</span>
                    <button className="  ">+</button>
                  </div>
                </td>
                <td className="px-4 py-2 text-center">34567 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-1/2 h-full">
          <table className="border border-gray-300 w-full shadow-md rounded-lg">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="py-2 px-6 text-start border border-gray-200">
                  wssedsed
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-5 py-5">
                  <div className="flex justify-between items-center ">
                    <h1>name</h1>
                    <h1>jkdedr</h1>
                  </div>
                </td>
              </tr>
              <td className="bg-black px-5 py-3 text-center" onClick={()=>{
                navigate("/orders")
              }}>
                <button className="text-white" >Pay</button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
      {/* ------   products lkke thisss*/}

      <div className=" p-5">
        <div className="flex h-[50px] w-full justify-between  ">
          <h1 className="text-xl font-bold">You May Also Like</h1>
          <p>Go to Products</p>
        </div>

        {/* ------   products lkke thisss*/}
        <div className=" ">
          <div className=" h-[350px] w-[250px] p-1  ">
            <div className="bg-gray-400 w-full h-full rounded-sm "></div>

            <h1>frfrffgtgtygt4g</h1>
            <p>rtgyht</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
