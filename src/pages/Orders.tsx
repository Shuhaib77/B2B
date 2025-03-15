import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Orders() {
  return (
    <>
      <Header />
      <div className="p-10">
        <div>
          <h1 className="text-2xl font-bold">Order History</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        </div>
        <div className="h-full mt-5">
          <table className="border border-gray-300 w-full shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">orderNo</th>
                <th className="border border-gray-300 px-4 py-2">Items</th>
                <th className="border border-gray-300 px-4 py-2">Stataus</th>
                <th className="border border-gray-300 px-4 py-2">TrackingId</th>
                <th className="border border-gray-300 px-4 py-2">
                  delivaryDate
                </th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-300">
                <td className="text-center">12312</td>
                <td className="px-4 py-2 ">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-[50px] bg-black h-[50px]"></div>
                    <span>3edrf</span>
                  </div>
                </td>
                <td>
                  <div className="w-full h-full bg-gray-400 rounded text-center">
                    e3se
                  </div>
                </td>
                <td className="px-4 py-2 text-center">15332025</td>
                <td className="px-4 py-2 text-center">15-3-2025</td>
                <td className="px-4 py-2 text-center">34567</td>

                <td className="px-4 py-2 text-center">reorderr </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Orders;
