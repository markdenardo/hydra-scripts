// by Olivia Jack
// https://ojack.github.io

osc(4, 0.1, 0.8)
  .color(1.04, 0, -1.1)
  .rotate(0.3, 0.1)
  .pixelate(2, 20)
  .modulate(noise(2.5), () => 1.5 * Math.sin(0.08 * time))
  .out(o0);

//remix
osc(4, 1, 1)
  .color(1.04, 0, -1.1)
  .rotate(0.3, 0.1)
  .pixelate(100000, 20)
  .modulate(o0)
  .out(o0);

// ojack mdn remix 2
osc(7.454, 1.59, 0.801)
  .color(1.009, 0.696, -1.901)
  .rotate(0.281, 0.062)
  .pixelate(90359.418, 27.251)
  .modulate(o0)
  .out(o0);
//w feedback
s0.initScreen();
src(o0).rotate().out(o1);
src(o0).modulate(s0).out(o2);
//output
render(o2);

// remix 3
osc(1, 1, 1)
  .color(1, 0, -0.004)
  .rotate(0.542, 0.068)
  .pixelate(2, 5.524)
  .modulate(o0)
  .out(o0);
