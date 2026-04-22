const fk = require("./fk");
const ik = require("./ik");
const hit = require("./collision");
const reroute = require("./reroute");

const start = [1200,0,1800];
const end   = [1800,0,1800];

const obstacle = {
  center:[1500,0,1800],
  radius:300
};

if(hit(end, obstacle)){
  console.log("Blocked");
  console.log(reroute(start,end,obstacle));
}else{
  console.log("Clear");
}
