a.show();

s0.initScreen();

osc(1, 1, a.fft[0]).out(o0);

shape(3).modulate(o0).out(o1);

src(o1).modulate(o1).out(o2);

src(o2).modulate(o2).rotate(1, 1).out(o3);

render(o2);
