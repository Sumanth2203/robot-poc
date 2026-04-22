const robot = require("./urdf_parser");

function deg(r){ return r*180/Math.PI; }
function rad(d){ return d*Math.PI/180; }

function ik(target){

  const x = target[0];
  const y = target[1];
  const z = target[2];

  const g = robot.geometry;

  const j1 = Math.atan2(y,x);

  const r = Math.sqrt(x*x+y*y) - g.xFixed;
  const s = z - g.baseZ;

  const D =
    (r*r + s*s - g.L2*g.L2 - g.L3*g.L3) /
    (2*g.L2*g.L3);

  const Dc = Math.max(-1, Math.min(1,D));

  const j3 = Math.acos(Dc);

  const j2 =
    Math.atan2(s,r) -
    Math.atan2(
      g.L3*Math.sin(j3),
      g.L2 + g.L3*Math.cos(j3)
    );

  return [
    +deg(j1).toFixed(3),
    +deg(j2).toFixed(3),
    +deg(j3).toFixed(3),
    0,0,0
  ];
}

module.exports = ik;
