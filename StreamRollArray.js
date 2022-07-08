function steamrollArray(arr) {
  let res = []
  for(let i = 0; i<arr.length; i++)
  {
    roller(arr, i, res)
  }
  console.log(res)
  return res;
}

function roller(arr, i, res){
  if(!Array.isArray(arr[i])){
    res.push(arr[i])
    return res
  }
  else{
    for(let j = 0; j<arr[i].length; j++)
    {
      roller(arr[i], j, res)
    }
  }
  return res

}

steamrollArray([1, {}, [3, [[4]]]]);
