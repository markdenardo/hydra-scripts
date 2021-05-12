// ee_2 . MULTIVERSE . time and feedback
// e_e // @eerie_ear
pat = () => solid().layer(solid().diff(osc(time / 16 * 1, time / 10 * 0.2).mult(osc(time / 1.8 * 1, time / 106 * 0.2).rotate(1.57)).modulate(shape(106, 1, 0.05)).mult(shape(106, 1, 0.25)))).modulateScale(osc(6, 0.125), 0.6);
//
solid().layer(solid(1, 1, -1).mult(pat().diff(src(o0).scale(0.03123).mult(solid(), [0.7, 0.6, 0.4, 0.06]).kaleid(1.1).saturate(0.3))).layer(solid(1, 1, 1).mask(noise(2, 0.5).invert().colorama(2).posterize(8, 4).luma(0.25).thresh(0.5).modulateRotate(osc(1, 0.5))).mult(gradient(11.5).kaleid(1).colorama(2).saturate(1.1).contrast(1.6).mult(solid(), 0.806)))).out();
//
speed = 0.9;
