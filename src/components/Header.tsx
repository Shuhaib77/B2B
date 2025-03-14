import React from "react";

function Header({ setOpen, open }: { setOpen?: any; open?: any }) {
  return (
    <div>
      <div className="flex w-[100vw]  h-[54px] shadow items-center ">
        <div className="w-1/4  h-full flex justify-center items-center gap-x-5  ">
          <h1
            className="cursor-pointer"
            onClick={() => {
              open === false ? setOpen(true) : setOpen(false);
            }}
          >
            <i className="fa-solid  fa-bars fa-xl"></i>
          </h1>
          <h1 className="text-black text-xl font-bold">B2B-MarketPlace</h1>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center gap-x-5">
          <h1 className="text-sm">HOME</h1>
          <h1 className="text-sm">CONTACT</h1>
          <h1 className="text-sm">BLOG</h1>
          <h1 className="text-sm">CONTACT</h1>
          <h1 className="text-sm">BLOG</h1>
        </div>
        <div className="w-1/4  h-full flex justify-center items-center gap-x-5">
          <h1><i className="fa-solid fa-user fa-lg"></i></h1>
          <h1><i className="fa-solid fa-bag-shopping fa-lg"></i></h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
