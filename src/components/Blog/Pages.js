import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import axios from "axios";
import gfm from 'remark-gfm'
import './pages.css'

const Pages = () => {
  const [data, setdata] = useState("");
  useEffect(() => {

    var loc=window.location.href.split('/')[4]
    axios
      .get(
        'https://api.github.com/repos/Captain-K-101/testrepo/git/blobs/'+document.location.hash.split('#')[1]
      )
      .then((response) => {
        setdata(atob(response.data.content));
      });
  }, []);
  return (
      <>
    <div class="content pt-20 pl-6 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 odark:bg-black " style={{"height": "100%","overflow": "hidden !important","width": "100%"}}>
      <div class="container mx-auto text-black dark:text-white object-scale-down "><Markdown plugins={[gfm]} allowDangerousHtml source={data} /></div>
    </div>
    </>
  );
};

export default Pages;
