import "./App.css";
import NavBar from "./components/NavBar";
import First from "./components/Heros/First";
import Firstleft from "./components/Heros/Firstleft";
import Blog from './components/Blog/Blog'
import Pages from './components/Blog/Pages'
import Banner from "./components/Heros/Banner";
import useDarkmode from "./hooks/useDarkmode";
import { Route, Switch } from "react-router-dom";
import CtfCards from './components/Cards/CtfCards'
import {useState,useEffect} from 'react'
import Presenter from './components/Heros/Presenter'

function App() {
  //  useDarkmode();
  
  return (
    <>
    <div class="dark:bg-black">
      <NavBar />
      <Switch>
        <Route exact path="/">
        <div className="mx-8">
          <Presenter />
          </div>
      <div className="underline text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl" align="center"> PROJECTS</div>
          <First />
          <Firstleft/>
          <CtfCards/>
        </Route>
        <Route path="/blogs/">
            <Blog/>
        </Route>
        <Route path="/test">
            <Pages/>
        </Route>
      </Switch>
      </div>
    </>
  );
}

export default App;
