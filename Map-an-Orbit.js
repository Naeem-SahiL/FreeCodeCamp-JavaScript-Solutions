function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
  arr.map(function(i){
    let a = i['avgAlt'] + earthRadius
    let T = 2*(Math.PI)*(Math.sqrt(Math.pow(a, 3)/GM))
    delete i['avgAlt']
    i['orbitalPeriod'] = Math.round(T)
    console.log(i['orbitalPeriod'])
    console.log(i)
  })
  

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
