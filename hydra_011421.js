a.show()
a.setBins(6)

s1.initScreen()

src(s1).modulate(o0).modulate(o1).out(o0)
noise( 10, ()=>a.fft[4] *4).repeatX( 100, 10 ).modulate(o0).modulate(o1).modulate(o3).out(o1)
shape(3).pixelate(2,()=>a.fft[1]).repeat().out(o2)

render(o2)