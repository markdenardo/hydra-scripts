a.show()
a.setBins(6)
 
 // Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
// shape(()=>a.fft[3]).repeat(10,100).rotate(1,1).out(o0)
shape(()=>a.fft[3]*4).out(o0)
render(o0)