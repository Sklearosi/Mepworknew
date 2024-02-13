import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className=" w-10/12 m-auto flex justify-between mt-5 items-center ">
        <h1>Mepwork</h1>
        <div
          className="grid gap-[2px]"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className=" h-[4px] w-[30px] bg-black rounded-xl "></div>
          <div className=" h-[4px] w-[15px] bg-black rounded-xl "></div>
          <div className=" h-[4px] w-[30px] bg-black rounded-xl "></div>
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
