
//shows fft (sound)
a.show()
//sets fft bins
a.setBins(6)

s1.initScreen()
src(s1).modulate(o1).out(o1)


// osc(1,1,()=>a.fft[1]).rotate(1,100).repeat(1).modulate(o0).modulate(o1).out(o0)
osc(1,1,1).rotate(1,100).repeat(1,1).modulate(o1).out(o0)

render(o0)