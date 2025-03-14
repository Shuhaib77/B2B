import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/home/Banner";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="w-[100%]">
        <Header setOpen={setOpen} open={open} />
      </div>
      <div>
        <Banner color={"black"} />
      </div>
    </div>
  );
}

export default Home;
