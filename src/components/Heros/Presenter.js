import React from 'react'
import { Animator, ScrollContainer,FlexCenterStyle, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "3em" }}>Hi Welcome to My Website 😀</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>I'm <span className="text-blue-200">Nikhil Nair</span> Aka Captain-K ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>I'm  A ⛅️</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>Web Security Engineer👋🏻</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={4}>
        <div style={FlexCenterStyle}>
          <span style={{ fontSize: "3em" }}>
            <Animator animation={MoveOut(1000, -0)}>Web Developer 🙋🏻‍♀️</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}>CTF Player(<span className="text-red-500">team bi0s</span>)</span>
        </Animator>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Done</span>
          <span style={{ fontSize: "3em" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
export default Presenter