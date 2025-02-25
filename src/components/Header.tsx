import React from "react";

function Header({ setOpen, open }) {
  return (
    <div>
      <div className="flex justify-between h-[54px] bg-[#F2A154] items-center ">
        <h1
          className="cursor-pointer"
          onClick={() => {
            open === false ? setOpen(true) : setOpen(false);
          }}
        >
          MENU
        </h1>
        <h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
        <h1>hii</h1>
      </div>
    </div>
  );
}

export default Header;
