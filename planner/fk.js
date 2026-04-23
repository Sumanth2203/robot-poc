```javascript
function Rx(t){
  const c=Math.cos(t), s=Math.sin(t);
  return [
    [1,0,0],
    [0,c,-s],
    [0,s,c]
  ];
}

function Ry(t){
  const c=Math.cos(t), s=Math.sin(t);
  return [
    [c,0,s],
    [0,1,0],
    [-s,0,c]
  ];
}

function mul3(A,B){
  let R=[[0,0,0],[0,0,0],[0,0,0]];
  for(let i=0;i<3;i++)
    for(let j=0;j<3;j++)
      for(let k=0;k<3;k++)
        R[i][j]+=A[i][k]*B[k][j];
  return R;
}

function axisRot(axis,theta){
  const [x,y,z]=axis;
  const c=Math.cos(theta), s=Math.sin(theta), v=1-c;

  return [
    [x*x*v+c,   x*y*v-z*s, x*z*v+y*s],
    [y*x*v+z*s, y*y*v+c,   y*z*v-x*s],
    [z*x*v-y*s, z*y*v+x*s, z*z*v+c]
  ];
}

function identity4(){
  return [
    [1,0,0,0],
    [0,1,0,0],
    [0,0,1,0],
    [0,0,0,1]
  ];
}

function T(R,p){
  return [
    [R[0][0],R[0][1],R[0][2],p[0]],
    [R[1][0],R[1][1],R[1][2],p[1]],
    [R[2][0],R[2][1],R[2][2],p[2]],
    [0,0,0,1]
  ];
}

function mul4(A,B){
  let R=Array(4).fill().map(()=>Array(4).fill(0));
  for(let i=0;i<4;i++)
    for(let j=0;j<4;j++)
      for(let k=0;k<4;k++)
        R[i][j]+=A[i][k]*B[k][j];
  return R;
}

function fk(qdeg){

  const q=qdeg.map(v=>v*Math.PI/180);

  let M=identity4();

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[0,0,0.675]));
  M=mul4(M,T(axisRot([0,0,-1],q[0]),[0,0,0]));

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[0.35,0,0]));
  M=mul4(M,T(axisRot([0,1,0],q[1]),[0,0,0]));

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[1.150,0,0]));
  M=mul4(M,T(axisRot([0,1,0],q[2]),[0,0,0]));

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[1.0,0,-0.041]));
  M=mul4(M,T(axisRot([-1,0,0],q[3]),[0,0,0]));

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[0,0,0]));
  M=mul4(M,T(axisRot([0,1,0],q[4]),[0,0,0]));

  M=mul4(M,T([[1,0,0],[0,1,0],[0,0,1]],[0,0,0]));
  M=mul4(M,T(axisRot([-1,0,0],q[5]),[0,0,0]));

  M=mul4(M,T(Ry(Math.PI/2),[0.215,0,0]));

  return [
    +(M[0][3].toFixed(3)),
    +(M[1][3].toFixed(3)),
    +(M[2][3].toFixed(3))
  ];
}

module.exports = fk;
```
