a.show();

s0.initScreen();

osc(1, 1, a.fft[0]).out(o0);

shape(3).modulate(o0).out(o1);

src(o1).modulate(o1).out(o2);

src(o2).modulate(o2).rotate(1, 1).out(o3);

render(o2);


a.show();

s0.initScreen();

src(s0).out(o0);

shape(() => a.fft[1] * 2)
  .modulate(o0)
  .repeat(9, () => a.fft[1] * 2)
  .out(o1);

src(o1).modulate(o1).out(o2);

src(o2).modulate(o2).modulate(o3).rotate(1, 2).out(o3);

render(o1);