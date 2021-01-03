osc(1,1,1)
.modulate(noise(1,1))
.out(o0)

noise(2,2,2)
.blend(o0)
.out(o1)

shape()
.rotate(1,1)
.repeat(1,20)
.modulate(o1)
.out(o2)

voronoi(1,1,1)
.rotate(1,10)
.modulate(o1)
.out(o3)

render()

