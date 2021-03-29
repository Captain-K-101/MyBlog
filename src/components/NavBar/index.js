import React,{useState} from "react";
import image1 from "../../assets/logo.png";
import useDarkmode from "../../hooks/useDarkmode"; 
import { Link } from "react-router-dom";

const Index = () => {
  const [click, setclick] = useState(false);

 // useDarkmode();
  return (
    <>
    <div className="rounded-2xl">
      <header class="fixed bg-white w-full dark:bg-black" style={{"z-index": "1"}}>
        <nav class="bg-gray-600 dark:bg-gray-800  shadow md:mx-6 mt-2 rounded-xl">
          <div class="max-w-7xl mx-auto px-8">
            <div class="flex items-center justify-between h-16">
              <div class="w-full justify-between flex items-center">
                <a class="flex-shrink-0" href="/">
                  <img class="h-8 w-8" src={image1} alt="Workflow" />
                </a>
                <div class="hidden md:block">
                  <div class="ml-10 flex items-baseline space-x-4">
                  <div>
                  </div>
                    <a
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Home
                    </a>
                    <a
                      class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/test"
                    >
                      Blog
                    </a>
                    <a
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      About Me
                    </a>
                    <a
                      class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div class="block">
                <div class="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div class="-mr-2 flex md:hidden">
                <button onClick={()=>{setclick(!click)}} class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class={click?"md:hidden":"hidden"}>
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Homee
              </a>
              <a
                class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Gallery
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Content
              </a>
              <a
                class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
      </div>
    </>
  );
};

export default Index;
