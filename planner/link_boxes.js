const fk = require("./fk");

function linkBoxes(j){

  const tcp = fk(j);

  const j1 = j[0]*Math.PI/180;

  return [

    {name:"base", center:[0,0,350], size:[800,800,700]},

    {name:"link1", center:[
      0,
      0,
      900
    ], size:[500,500,500]},

    {name:"link2", center:[
      500*Math.cos(j1),
      500*Math.sin(j1),
      1200
    ], size:[1200,260,260]},

    {name:"link3", center:[
      1200*Math.cos(j1),
      1200*Math.sin(j1),
      1900
    ], size:[1000,240,240]},

    {name:"link4", center:[
      tcp[0]-300*Math.cos(j1),
      tcp[1]-300*Math.sin(j1),
      tcp[2]
    ], size:[350,350,350]},

    {name:"link5", center:[
      tcp[0]-150*Math.cos(j1),
      tcp[1]-150*Math.sin(j1),
      tcp[2]
    ], size:[280,280,280]},

    {name:"link6", center:[
      tcp[0],
      tcp[1],
      tcp[2]
    ], size:[250,250,250]}
  ];
}

module.exports = linkBoxes;
