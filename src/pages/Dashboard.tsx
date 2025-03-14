import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import { div } from "framer-motion/client";
import Wholesailers from "../components/Wholesailers";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const { url, id } = useParams();

  const role = localStorage.getItem("role");
  const data = {
    wholesailer: ["Manage Orders", "View Inventory", "Settings"],
    retailer: ["Manage Orders", "Purchase Stock", "Profile"],
    seller: ["Manage Products", "View Sales", "Profile"],
  };

  return (
    <div>
      <div className="w-[100%]">
        <Header setOpen={setOpen} open={open} />
      </div>
      <div className="flex">
        {url === "wholesailer" && open ? (
          <div>
            <Sidebar  heading={"WHOLESAILER"} />
          </div>
        ) : url === "seller" && open ? (
          <div>
            <Sidebar heading={"SELLER"} />
          </div>
        ) : url === "retailer" && open ? (
          <div>
            <Sidebar heading={"RETAILER"} />
          </div>
        ) : (
          !open
        )}
        <div className="w-full flex justify-center  ">
          {id === "mangeproduct" ? (
            <Banner />
          ) : id === "viewwholesailers" ? (
            <Wholesailers />
          ) : (
            "another"
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Dashboard;
