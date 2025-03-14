import React from "react";
import { Link } from "react-router-dom"; // Import Link if needed

function Sidebar({ heading }:{heading:any}) {
  const role:any = localStorage.getItem("role");

  const data = {
    wholesailer: {
      data: ["Manage viwOrders", "View Inventory", "Settings"],
      links: ["manage-orders", "view-inventory", "settings"],
    },
    retailer: {
      data: ["view Wholesailers", "Purchase Stock", "Profile"],
      links: ["viewwholesailers", "purchase-stock", "profile"],
    },
    seller: {
      data: ["Manage Products", "View Sales", "Profile"],
      links: ["mangeproduct", "view-sales", "profile"],
    },
  };
  const menuItems = data[role] || { data: [], links: [] };
  return (
    <div className="w-[19vw]">
      <div className="h-[6vh] flex justify-around items-center bg-[#314E52]">
        <h1 className="text-white">{heading}</h1>
      </div>
      <div className="h-[88vh] bg-[#35A29F] flex flex-col gap-y-10 p-4">
        {menuItems.data.map((item:any, i:string) => (
      <Link
      key={i}
      to={`/dashboard/${role}/${menuItems.links[i]}`} 
      className="p-3 rounded hover:bg-white transition duration-300"
    >
      {item}
    </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
