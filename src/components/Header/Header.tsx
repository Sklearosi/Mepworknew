import { useState } from "react";
import Menu from "./Menu";

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className=" w-full m-auto flex justify-between mt-5 items-center ">
        <div className=" flex w-10/12 justify-between items-center m-auto">
          <h1 className=" text-white font-bold text-2xl ">Mepwork</h1>
          <div
            className="grid gap-[3px]"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className=" h-[4px] w-[30px] bg-white rounded-xl "></div>
            <div className=" h-[4px] w-[15px] bg-white rounded-xl "></div>
            <div className=" h-[4px] w-[30px] bg-white rounded-xl "></div>
          </div>
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
