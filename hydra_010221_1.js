
a.show()
a.setBins(3)

osc(1,1,1).modulate(o2).modulate(o3).out(o0)

noise(2,2,2).blend(o0).out(o1)
// shape(4).rotate(1,1).repeat(()=>a.fft[1],20).modulate(o3).out(o1)

shape(2).rotate(1,()=>a.fft[1]).repeat(()=>a.fft[1],20).modulate(o3).blend(o2).out(o2)

voronoi(1,2,1).rotate(10,()=>a.fft[1]).modulate(o2).blend(o0).out(o3)

render(o2)


// a.show()
// a.setBins(3)

// osc(1,1,1).modulate(o2).modulate(o3).out(o0)

// noise(2,2,2).blend(o0).out(o1)

// shape(3).rotate(1,()=>a.fft[2]).repeat(()=>a.fft[1],()=>a.fft[1]).modulate(o1).blend(o0).out(o2)

// voronoi(1,2,1).rotate(10,()=>a.fft[2]).modulate(o2).blend(o0).out(o3)

// render(o2)