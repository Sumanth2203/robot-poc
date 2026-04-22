function dist(a,b){
  return Math.sqrt(
    (a[0]-b[0])**2 +
    (a[1]-b[1])**2 +
    (a[2]-b[2])**2
  );
}

function hit(point, obstacle){
  return dist(point, obstacle.center) < obstacle.radius;
}

module.exports = hit;
