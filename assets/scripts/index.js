//SASS colors
const sassColor1 = "rgb(249, 249, 249)";
const sassColor2 = "rgb(0 51 102)";
const sassColor3 = "rgb(0 51 102)";
const sassColor3t = "rgba(0, 51, 102, 0.5)";
const sassColor4 = "rgb(20, 20, 20)";
const sassColor5 = "rgb(161, 198, 236)";

// Scroll object from Locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color1.is-inview")) {
    document.body.style.background = sassColor3;
    document.body.style.color = sassColor1;
  } else if (
    document.querySelector("#color2.is-inview") ||
    document.querySelector("#color3.is-inview")
  ) {
    document.body.style.background = sassColor5;
    document.body.style.color = sassColor1;
  } else {
    document.body.style.background = sassColor1;
    document.body.style.color = sassColor3;
  }
});
