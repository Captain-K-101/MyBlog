import React, { useState,useEffect } from "react";
import './cards.css'
import axios from "axios";

const CtfCards = () => {
    const [repos, setrepos] = useState([]);
useEffect(() => {
    axios
      .get("https://api.github.com/repos/Captain-K-101/testrepo/git/trees/main")
      .then(function (res) {
        if (res.data) {
          setrepos(res.data.tree);
          console.log(res.data.tree)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <>
      <div
        className="underline text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        align="center"
      >
        {" "}
        CTF'S
      </div>
      <section class="text-gray-600 body-font grid grid-cols-4 gap-4 mx-10">
{
repos.map((x, i) => (
<div class="py-4 ">
    <div class="shadow-lg group container  rounded-md bg-gray-200 dark:bg-gray-500 max-w-sm flex justify-center items-center  mx-auto ">
        <div>
        <div  class="hover:opacity-50 w-full image-cover rounded-t-md" >
                <img
                  class="lg:h-auto md:h-auto w-auto object-cover object-center"
                  src={"https://github.com/Captain-K-101/testrepo/blob/main/"+x.path+"/"+x.path+".png?raw=true"}
                  width="50%"
                  heigh="50%"
                  alt="blog"
                />
        </div>
        </div>
        <div class="absolute opacity-0 hover:opacity-50 hover:bg-white dark:bg-gray-500">
       <span class="text-3xl font-bold text-black tracking-wider dark:text-white leading-relaxed font-sans">{x.path}</span> 
       <div class="pt-8 text-center">
           <button  onClick={()=>document.location='/blogs#'+x.url.split('trees/')[1]} class="text-center rounded-lg p-4 bg-black dark:bg-white text-gray-700 text-white font-bold text-lg">More</button>
           </div>
    </div>
    </div>
</div>
))}
      </section>
    </>
  );
};

export default CtfCards;
