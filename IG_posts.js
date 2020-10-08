
//rotating lines
a.setCutoff(4)
a.setScale(1)
a.setSmooth(0.8)
noise(1,1).pixelate(1,()=>(a.fft[0]*4)).rotate(2).repeat(2).out()

//kaledescope triangle
noise(1,12)
.pixelate(10,21)
.scale( 1,({time})=>Math.sin(time/5)*0.5 )
.color(1,3,6)
.kaleid(3)
.rotate(1,100)
.out()

a.setSmooth(23);
osc(0.612, 1, 1).pixelate(1.571, 21).scale(0.1, 1).color(1.418, 3.808, 36.607).kaleid(3.265).rotate(1, 1).saturate(({time}) => Math.sin(time) * 10).out(o0);

// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
a.setSmooth(23);
noise().pixelate(1,1,1).scale(0.173, 1).color(1.418, 0.446, 36.607).kaleid(3.265).rotate(1, 1).saturate(({time}) => Math.sin(time) * 10).out(o0);

a.setSmooth(23);
osc(1,1,1).repeatX(1, 0.1).pixelate(11).scale(0.1, 1).kaleid(8).colorama(100).saturate(1.734, 0).rotate(0.084, 0.1).contrast(1).out(o0);

a.setSmooth(23);
noise(1,0.1).pixelate(1,1).scale(0.1, 11).color(0.1,0.01,1).rotate(1,1).kaleid(3).out(o0);
