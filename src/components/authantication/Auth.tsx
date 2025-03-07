import { Button } from "@material-tailwind/react";
import { div } from "framer-motion/client";
import React, { useState } from "react";

function Auth() {
  const [change, setChange] = useState(false);

  return (
    <div className="flex h-screen w-screen">
      {!change && (
        <div className=" bg-blue-700 h-full w-1/2 ">
          <div className="h-[10vh] flex  items-center p-12 gap-x-4   ">
            <h1 className=" h-[20px] bg-white w-[30px]"></h1>
            <h1 className="text-white font-extrabold">B2B-MarketPlace</h1>
          </div>
 
          <div className=" h-[90vh] flex justify-center items-center p-5">
            <div className="h-[500px] w-[400px]   grid grid-cols-1 bg-gray-200 rounded-md place-content-center place-items-center gap-y-4">
              <h1 className="font-bold">Already have an accunt?</h1>
              <p className=" text-sm text-center">
                dede3de3de3deded3edxwdxcwx <br />
                dxwdwdwdwdwdwddededededed3d3d
              </p>
              <Button
                className="cursor-pointer  font-bold border border-black w-56 pt-2 pb-2 text-black"
                onClick={() => {
                  setChange(true);
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 place-content-center place-items-center gap-y-2 h-full">
          <div>
            <h1 className="text-2xl font-bold">
              {change ? "SignIn" : "SignUp"}
            </h1>
            <h1>Nice to meet you! Enter your details to register.</h1>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                {!change && (
                  <div className="mb-1 flex flex-col gap-6">
                    <h1 className="-mb-3">Your Name</h1>
                    <input
                      placeholder="Name"
                      className=" border rounded focus:!border-t-gray-900 p-3"
                    />
                  </div>
                )}
                <h1 className="-mb-3">Your Email</h1>
                <input
                  placeholder="Email"
                  className=" border rounded focus:!border-t-gray-900 p-3"
                />
                <h1 className="-mb-3">Password</h1>
                <input
                  type="password"
                  placeholder="password"
                  className=" border rounded focus:!border-t-gray-900 p-3"
                />
                {/* <div className="w-[300px]  flex justify-between border rounded p-3 ">
                    <h1>dd</h1>
                    <i class="fa-solid fa-chevron-down"></i>

                </div> */}
                <select className="w-48 p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm">
                  <option value="">Select an option</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                </select>
              </div>
              <h1
                label={
                  <h1
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </h1>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button className="mt-6 bg-blue-700 p-2" fullWidth>
                sign up
              </Button>
              <h1 color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="#" className="font-medium text-gray-900">
                  Sign In
                </a>
              </h1>
            </form>
          </div>
        </div>
      </div>

      {change && (
        <div className="bg-blue-700 h-full w-1/2   ">
          <div className="h-[5vh] flex  items-center p-12 gap-x-4   ">
            <h1 className=" h-[20px] bg-white w-[30px]"></h1>
            <h1 className="text-white font-extrabold">B2B-MarketPlace</h1>
          </div>
 
          <div className="h-[90vh] flex justify-center items-center p-5 ">
          <div className="h-[500px] w-[400px]   grid grid-cols-1 bg-gray-200 rounded-md place-content-center place-items-center gap-y-4">
            <h1 className="font-bold">Already have an accunt?</h1>
            <p className=" text-sm text-center">
              dede3de3de3deded3edxwdxcwx <br />
              dxwdwdwdwdwdwddededededed3d3d
            </p>
            <Button
              className="cursor-pointer  font-bold border border-black w-56 pt-2 pb-2 text-black"
              onClick={() => {
                setChange(false);
              }}
            >
              Register
            </Button>
          </div>
        </div>
          </div>
      )}
    </div>
  );
}

export default Auth;
