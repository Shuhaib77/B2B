import React from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import { useNavigate } from "react-router-dom";

function WholesailerHome() {

  const navigate=useNavigate()
  return (
    <>
      <div className="h-[100vh] w-[100vw]  ">
        <div>
          <Header />
        </div>
        <div>
          <Banner color={"#652334"} />

        </div>

        <div className="w-full h-full p-10">
          {/* -------- featurd products */}
          <div className="">
            {/* ------  featurd products heading*/}
            <div className="flex h-[100px] w-full justify-between p-3 ">
              <h1 className="text-3xl font-bold">featurd products</h1>
              <p>wertyurtyuijk</p>
            </div>

            {/* ------  featurd products*/}
            <div className="text-center ">
              <div className=" h-[350px] w-[250px]  ">
                <div className="bg-gray-400 w-full h-full rounded-sm "></div>

                <h1>frfrffgtgtygt4g</h1>
                <p>rtgyht</p>
              </div>
            </div>
          </div>

          {/* ------ Catogerieesss */}
          <div className="mt-32 ">
            {/* ------ Catogerieesss head */}
            <div className="text-center">
              <h1>ghvbjnkml,;.</h1>
              <p>pxfcgvhbjnm</p>
            </div>
            {/* ------ Catogerieesss view */}
            <div className="flex justify-center gap-x-15 ">
              <div className=" w-[380px] h-[400px] bg-gray-500 "></div>
              <div className=" flex flex-col gap-y-4 items-center justify-center">
                <div className="w-[500px] h-[190px] bg-gray-500"></div>
                <div className="w-[500px] h-[190px] bg-gray-500"></div>
              </div>
              <div className=" w-[380px] h-[400px] bg-gray-500"></div>
            </div>
          </div>

          {/* -----most populr */}

          <div className="mt-10">
            {/* ------  most populr heading*/}
            <div className=" flex justify-between items-center h-[100px] w-full p-3 ">
              <div>
                <h1 className="text-3xl font-bold">featurd products</h1>
                <p>wertyurtycccdcffuijk</p>
                <p>wertyurtycccdcffuijk</p>
              </div>
              <div>
                <button className="bg-green-300 w-20 p-3 rounded" onClick={()=>{
                  navigate("/allproduct")
                }}>
                  ViewAll{" "}
                </button>
              </div>
            </div>

            {/* ------  most populr products*/}
            <div className="text-center mt-3 ">
              <div className=" h-[350px] w-[250px]  ">
                <div className="bg-gray-400 w-full h-full rounded-sm "></div>

                <h1>frfrffgtgtygt4g</h1>
                <p>rtgyht</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WholesailerHome;
