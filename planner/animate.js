const fk = require("./fk");

function animate(path){

  return path.map((joints,i)=>{

    const tcp = fk(joints);

    return {
      frame:i,
      joints:joints,
      tcp:{
        x:+tcp[0].toFixed(1),
        y:+tcp[1].toFixed(1),
        z:+tcp[2].toFixed(1)
      }
    };
  });
}

module.exports = animate;
