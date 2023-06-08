import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import deved from "./assets/dev-ed-wave.png";
import design from "./assets/design.png";
import code from "./assets/code.png";
import consulting from "./assets/consulting.png";
import web1 from "./assets/web1.png";
import web2 from "./assets/web2.png";
import web3 from "./assets/web3.png";
import web4 from "./assets/web4.png";
import web6 from "./assets/web6.png";
import web5 from "./assets/web5.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode]= useState(false);
  return (
    <div className={darkMode? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">spark</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">Sparkle</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              pariatur voluptatem eaque facilis, eius quam.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={deved} alt="" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">services offered</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem eum soluta pariatur! Ipsa, sit explicabo?{" "}
              <span className="text-teal-500">agencies consulted for</span>
              <span className="text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio nesciunt earum laudantium! Est, sequi?
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              saepe.
            </p>
          </div>

          <div className="md:flex gap-10">
            <div className=" flex  flex-col text-center shadow-lg p-10 rounded-xl my-10 items-center ">
              <img width={100} height={100} src={design} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifl designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className="py-4 text-teal-600 capitalize">
                design tools i use
              </h4>
              <p className="text-gray-800py-2 capitalize">photoshop</p>
              <p className="text-gray-800py-2 capitalize">Illustrator</p>
              <p className="text-gray-800py-2 capitalize">Figma</p>
            </div>

            <div className=" flex  flex-col text-center shadow-lg p-10 rounded-xl my-10 items-center">
              <img width={100} height={100} src={code} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifl designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className="py-4 text-teal-600 capitalize">
                design tools i use
              </h4>
              <p className="text-gray-800py-2 capitalize">photoshop</p>
              <p className="text-gray-800py-2 capitalize">Illustrator</p>
              <p className="text-gray-800py-2 capitalize">Figma</p>
            </div>

            <div className=" flex  flex-col text-center shadow-lg p-10 rounded-xl my-10 items-center">
              <img width={100} height={100} src={consulting} alt="" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautifl designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your design theory.
              </p>
              <h4 className="py-4 text-teal-600 capitalize">
                design tools i use
              </h4>
              <p className="text-gray-800py-2 capitalize">photoshop</p>
              <p className="text-gray-800py-2 capitalize">Illustrator</p>
              <p className="text-gray-800py-2 capitalize">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-2">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem eum soluta pariatur! Ipsa, sit explicabo?{" "}
              <span className="text-teal-500">agencies consulted for</span>{" "}
              <span className="text-teal-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                odio nesciunt earum laudantium! Est, sequi?
              </span>
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint,
              saepe.
            </p>
          </div>
          <div className="flex gap-10 flex-wrap lg:flex py-4"> 
            <div className="flex-1 basis-1/3">
              <img src={web1} alt="" />
            </div>
            <div className="flex-1 basis-1/3">
              <img src={web2} alt="" />
            </div>
            <div className="flex-1 basis-1/3">
              <img src={web3} alt="" className="object-center w-full h-full "/>
            </div>
            <div className="flex-1 basis-1/3">
              <img src={web4} alt="" className="object-cover" />
            </div>

            <div className="flex-1 basis-1/3">
              <img src={web5} alt="" className="object-center w-full h-full " />
            </div>

            <div className="flex-1 basis-1/3">
              <img src={web6} alt="" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
