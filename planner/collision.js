function dist(a,b){
  return Math.sqrt(
    (a[0]-b[0])**2 +
    (a[1]-b[1])**2 +
    (a[2]-b[2])**2
  );
}

function check(boxes, obstacle){

  for(const b of boxes){

    const d = dist(b.center, obstacle.center);

    const approx =
      obstacle.radius +
      Math.max(...b.size)/2;

    if(d < approx){
      return {
        collision:true,
        link:b.name
      };
    }
  }

  return {collision:false};
}

module.exports = check;
