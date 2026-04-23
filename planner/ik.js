```javascript
const fk = require("./fk");

function dist(a,b){
  return Math.sqrt(
    (a[0]-b[0])**2 +
    (a[1]-b[1])**2 +
    (a[2]-b[2])**2
  );
}

function ik(target){

  let q=[0,-90,90,0,0,0]; // seed

  const lr=0.6;
  const delta=0.5;

  for(let iter=0; iter<250; iter++){

    const p=fk(q);
    const err=dist(p,target);

    if(err < 0.005) return q.map(v=>+v.toFixed(3));

    for(let j=0;j<6;j++){

      let q2=[...q];
      q2[j]+=delta;

      let p2=fk(q2);

      let grad = (
        dist(p2,target)-err
      )/delta;

      q[j]-=lr*grad;
    }
  }

  return q.map(v=>+v.toFixed(3));
}

module.exports = ik;
```
