import LocomotiveScroll from "locomotive-scroll";

console.log("test");
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
