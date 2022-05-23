import LocomotiveScroll from "https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js";
// let LocomotiveScroll = require("locomotive-scroll");

console.log("test");
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
