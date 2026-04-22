const robot = require("./urdf_parser");

function rad(d){ return d*Math.PI/180; }

function fk(j){

  const j1 = rad(j[0]);
  const j2 = rad(j[1]);
  const j3 = rad(j[2]);

  const r =
    robot.xFixed +
    robot.L2*Math.cos(j2) +
    robot.L3*Math.cos(j2+j3);

  const z =
    robot.baseZ -
    robot.L2*Math.sin(j2) -
    robot.L3*Math.sin(j2+j3);

  const x = r*Math.cos(j1);
  const y = r*Math.sin(j1);

  return [x,y,z];
}

module.exports = fk;
