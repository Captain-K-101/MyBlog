import React, { useState,useEffect } from "react";
import Tilt from "react-parallax-tilt";
import axios from "axios";

const Blog = () => {
  const [repos, setrepos] = useState([]);

useEffect(() => {
    axios
      .get("https://api.github.com/repos/Captain-K-101/testrepo/git/trees/"+document.location.hash.split('#')[1])
      .then(function (res) {
        if (res.data) {
          var tmp=res.data.tree
          var filtered = tmp.filter(function(item) { 
             return !item.path.includes('.png');  
          });
          setrepos(filtered);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  return (
    <>
      <div
        className="pt-10 underline text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
        align="center"
      >
        {" "}
        CTF'S
      </div>
      <section class="text-gray-600 body-font grid grid-cols-4 gap-4">
{
repos?.map((x, i) => (
  <>
          <Tilt scale={1.1}>
          <a href={"/test#"+x.sha}>
            <div
              class="p-4 hover:scale:125"
            >
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-auto md:h-auto w-auto object-cover object-center"
                  src={"https://github.com/Captain-K-101/testrepo/blob/main/"+window.location.pathname.split('blogs/')[1].split('/')[0]+"/"+window.location.pathname.split('blogs/')[1].split('/')[0]+".png?raw=true"?"https://github.com/Captain-K-101/testrepo/blob/main/"+window.location.pathname.split('blogs/')[1].split('/')[0]+"/"+window.location.pathname.split('blogs/')[1].split('/')[0]+".png?raw=true":"https://dummyimage.com/720x400"}
                  alt="blog"
                />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {x.path?.split('.')[0]}
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </a>
          </Tilt>
          </>
  ))}
      </section>
      <div align="center">
        <button className="text-3xl font-bold hover:text-blue-700">
          More. . .
        </button>
      </div>
    </>
  );
};

export default Blog;
