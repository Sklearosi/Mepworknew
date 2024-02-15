import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const phraseOne = ["", "კომფორტის", "შექმნა"];
  const phraseTwo = ["", "პროგრესის", "გაძლიერება"];
  const phraseThree = ["", "ინოვაცია", "ყველა", "წრეში"];
  const phraseFour = ["", "სიზუსტე", "ყველა", "მილში"];

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const intervalThing = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount === 4) {
          clearInterval(intervalThing);
        }

        return newCount;
      });
    }, 400);

    return () => clearInterval(intervalThing);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-x-hidden h-[100vh]">
        <Header />
        <div
          className={`${
            count > 0 ? ` opacity-100 -mt-10 ` : ` opacity-0 mt-10 `
          } pb-20 transition-all duration-1000 -z-10 absolute top-0 w-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(./mobile/hd-engineering-blueprint-08qr36dmw5ttjbm2.jpg)`,
          }}
        >
          <div className=" w-10/12 m-auto mt-[145px] text-white flex gap-1">
            {phraseOne.map((word, index) => (
              <p
                className={` text-xl transition-all duration-700 ${
                  count > index ? "opacity-100" : "opacity-0"
                } `}
                key={index}
              >
                {word}
              </p>
            ))}
          </div>
          <div className=" text-white w-10/12 m-auto mt-4 ml-[20%] flex gap-1">
            {phraseTwo.map((word, index) => (
              <p
                className={` text-xl transition-all duration-700 ${
                  count > index ? "opacity-100" : "opacity-0"
                } `}
                key={index}
              >
                {word}
              </p>
            ))}
          </div>
          <div className=" text-white w-10/12 m-auto mt-10 flex gap-1">
            {phraseThree.map((word, index) => (
              <p
                className={` text-xl transition-all duration-700 ${
                  count > index ? "opacity-100" : "opacity-0"
                } `}
                key={index}
              >
                {word}
              </p>
            ))}
          </div>
          <div className=" text-white w-10/12 m-auto mt-4 ml-[20%] flex gap-1">
            {phraseFour.map((word, index) => (
              <p
                className={` text-xl transition-all duration-700 ${
                  count > index ? "opacity-100" : "opacity-0"
                } `}
                key={index}
              >
                {word}
              </p>
            ))}
          </div>
        </div>
        <Routes>
          <Route />
        </Routes>
      </div>
    </>
  );
}

export default App;
