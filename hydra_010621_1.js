s1.initScreen()
s2.initScreen()
s3.initScreen()
src(s1).modulate(o0).rotate(1,100).out(o0)
src(s2).modulate(o1).modulate(o1).out(o1)
src(s3).modulate(o3).out(o3)
noise( 10, 1 ).repeatX( 100, 10 ).modulate(o0).modulate(o1).modulate(o3).out(o2)

render(o2)