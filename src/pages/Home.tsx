import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      {open && (
        <div>
          <Sidebar />
        </div>
      )}

      <div className="w-[100%]">
        <Header setOpen={setOpen} open={open} />
      </div>
    </div>
  );
}

export default Home;
