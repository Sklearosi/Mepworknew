import { Link } from "react-router-dom";

interface MenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Menu({ open, setOpen }: MenuProps) {
  return (
    <div
      className={` transition-all duration-700 bg-white w-full absolute top-0 h-full ${
        !open ? " -right-full " : " right-0"
      } `}
    >
      <img
        className=" w-10 h-10 absolute right-[32px] top-[13px] "
        src="./mobile/xmark-solid.svg"
        alt=""
        onClick={() => {
          setOpen(false);
        }}
      />
      <ul className="  w-11/12 m-auto grid justify-center items-center gap-10 mt-[200px]">
        <li
          className={` transition-all duration-1000 flex items-center gap-5 ${
            !open ? " ml-[750px] " : " m-0"
          }`}
        >
          <div className=" w-5 h-[2px] bg-black "></div>
          <Link className=" text-xl " to="/">
            მთავარი
          </Link>
          <div className=" w-5 h-[2px] bg-black "></div>
        </li>
        <li
          className={` transition-all duration-1000 flex items-center gap-5 ${
            !open ? " ml-[850px] " : " m-0"
          }`}
        >
          <div className=" w-5 h-[2px] bg-black "></div>
          <Link className=" text-xl " to="/">
            პროექტები
          </Link>
          <div className=" w-5 h-[2px] bg-black "></div>
        </li>
        <li
          className={` transition-all duration-1000 flex items-center gap-5 ${
            !open ? " ml-[950px] " : " m-0"
          }`}
        >
          <div className=" w-5 h-[2px] bg-black "></div>
          <Link className=" text-xl " to="/">
            კომპანია
          </Link>
          <div className=" w-5 h-[2px] bg-black "></div>
        </li>
        <li
          className={` transition-all duration-1000 flex items-center gap-5 ${
            !open ? " ml-[1150px] " : " m-0"
          }`}
        >
          <div className=" w-5 h-[2px] bg-black "></div>
          <Link className=" text-xl " to="/">
            კონტაქტი
          </Link>
          <div className=" w-5 h-[2px] bg-black "></div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
