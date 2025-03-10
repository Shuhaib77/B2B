import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";

function Auth() {
  const [change, setChange] = useState(false);

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        await axios.post("http://localhost:5000/api/register", values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const signInFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        console.log(values);

        const response = await axios.post(
          "http://localhost:5000/api/login",
          values
        );
        localStorage.setItem("id", response.data.data.user._id);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const formik = change ? signInFormik : signUpFormik;

  return (
    <div className="flex h-screen w-screen">
      {!change && (
        <div className=" bg-blue-700 h-full w-1/2 ">
          <div className="h-[10vh] flex items-center p-12 gap-x-4">
            <h1 className=" h-[20px] bg-white w-[30px]"></h1>
            <h1 className="text-white font-extrabold">B2B-MarketPlace</h1>
          </div>

          <div className=" h-[90vh] flex justify-center items-center p-5">
            <div className="h-[500px] w-[400px] grid grid-cols-1 bg-gray-200 rounded-md place-content-center place-items-center gap-y-4">
              <h1 className="font-bold">Already have an account?</h1>
              <p className=" text-sm text-center">
                Log in to access your account.
              </p>
              <button
                className="cursor-pointer font-bold border border-black w-56 pt-2 pb-2 text-black"
                onClick={() => setChange(true)}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 place-content-center place-items-center gap-y-2 h-full">
          <div>
            <h1 className="text-2xl font-bold">
              {change ? "Sign In" : "Sign Up"}
            </h1>
            <h1>Nice to meet you! Enter your details to register.</h1>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-1 flex flex-col gap-6">
                {!change && (
                  <div className="mb-1 flex flex-col gap-6">
                    <h1 className="-mb-3">Your Name</h1>
                    <input
                      placeholder="Name"
                      className="border rounded focus:!border-t-gray-900 p-3"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <select
                      className="w-48 p-4 rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                      name="role"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Select an option</option>
                      <option value="wholesailer">wholesailer</option>
                      <option value="retailer">retailer</option>
                      <option value="seller">seller</option>
                    </select>
                  </div>
                )}
                <h1 className="-mb-3">Your Email</h1>
                <input
                  placeholder="Email"
                  className="border rounded focus:!border-t-gray-900 p-3"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <h1 className="-mb-3">Password</h1>
                <input
                  type="password"
                  placeholder="Password"
                  className="border rounded focus:!border-t-gray-900 p-3"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <h1 className="flex items-center text-sm font-normal">
                I agree to the Terms and Conditions
              </h1>

              <button
                type="submit"
                className="mt-6 bg-blue-700 p-2 w-full text-white"
              >
                {change ? "Sign In" : "Sign Up"}
              </button>
              <h1 className="mt-4 text-center font-normal">
                {change ? "Don't have an account?" : "Already have an account?"}{" "}
                <a
                  href="#"
                  className="font-medium text-gray-900"
                  onClick={() => setChange(!change)}
                >
                  {change ? "Sign Up" : "Sign In"}
                </a>
              </h1>

              <h1>{console.log(formik.values)}</h1>
            </form>
          </div>
        </div>
      </div>

      {change && (
        <div className="bg-blue-700 h-full w-1/2">
          <div className="h-[5vh] flex items-center p-12 gap-x-4">
            <h1 className=" h-[20px] bg-white w-[30px]"></h1>
            <h1 className="text-white font-extrabold">B2B-MarketPlace</h1>
          </div>

          <div className="h-[90vh] flex justify-center items-center p-5">
            <div className="h-[500px] w-[400px] grid grid-cols-1 bg-gray-200 rounded-md place-content-center place-items-center gap-y-4">
              <h1 className="font-bold">Don't have an account?</h1>
              <p className="text-sm text-center">
                Register to start your journey with us.
              </p>
              <button
                className="cursor-pointer font-bold border border-black w-56 pt-2 pb-2 text-black"
                onClick={() => setChange(false)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
