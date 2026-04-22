function linkBoxes(joints){

  return [
    {name:"base",  center:[0,0,350],   size:[800,800,700]},
    {name:"link1", center:[0,0,900],   size:[500,500,600]},
    {name:"link2", center:[600,0,1200],size:[1200,260,260]},
    {name:"link3", center:[1500,0,1800],size:[1000,240,240]},
    {name:"link4", center:[2100,0,1800],size:[350,350,350]},
    {name:"link5", center:[2300,0,1800],size:[280,280,280]},
    {name:"link6", center:[2500,0,1800],size:[300,220,220]}
  ];

}
module.exports = linkBoxes;
