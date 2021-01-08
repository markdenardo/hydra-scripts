a.show()
a.setBins(6)

s1.initScreen()
src(s1).modulate(o0).modulate(o1).saturate( ()=>a.fft[3]*10 ).out(o0)

osc(1,1,1).pixelate(1,1,1).modulate(o0).out(o1)
render(o0)