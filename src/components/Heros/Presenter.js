import React from 'react'
import { Animator, ScrollContainer,FlexCenterStyle, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span  className="md:text-5xl flex flex-wrap content-center fade-in-slow font-black" style={{ fontSize: "3em" }}>Hi Welcome to My Website 😀</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span className="tracking-wider " style={{ fontSize: "3em"}}>I Am <span className="text-blue-200">Nikhil Nair</span>✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
          <span className="tracking-wider" style={{ fontSize: "3em"}}>A.K.A <span className="text-blue-200">Captain-Kay</span>✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>⛅️I'm  Am</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em","margin-left":"4rem" }}>Web Security Engineer👨‍💻</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "3em" }}>
            <Animator  animation={MoveIn(1000, 0)}><div className="text-4xl">Web Developer🌐</div></Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={6}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "2.5em" ,"margin-left":"0rem" }}>CTF Player<br/>(<span className="text-red-500">team bi0s</span>)<br/>🚩</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Contact me at</span>
          <span style={{ fontSize: "3em" }}>
          <button class="fade-in-slow bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Resume
          </button>
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
export default Presenter