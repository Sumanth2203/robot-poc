const fk = require("./fk");
const boxes = require("./link_boxes");
const hit = require("./collision");
const reroute = require("./reroute");

const joints = [0,-90,90,0,0,0];

const obstacle = {
  center:[1500,0,1800],
  radius:300
};

const tcp = fk(joints);
const robotBoxes = boxes(joints);

const result = hit(robotBoxes, obstacle);

if(result.collision){

  console.log("Collision at:", result.link);

  console.log(
    reroute([391,0,3040], tcp, obstacle)
  );

}else{

  console.log("Safe Path");
  console.log(tcp);
}
