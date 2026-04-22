function reroute(start,end,obs){

  return [
    start,
    [
      obs.center[0],
      obs.center[1] + obs.radius + 400,
      obs.center[2] + 300
    ],
    end
  ];
}

module.exports = reroute;
