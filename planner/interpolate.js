function interpolate(start,end,steps=20){

  const out=[];

  for(let i=0;i<=steps;i++){

    const t=i/steps;

    const row = start.map((v,k)=>
      +(v + (end[k]-v)*t).toFixed(3)
    );

    out.push(row);
  }

  return out;
}

module.exports = interpolate;
