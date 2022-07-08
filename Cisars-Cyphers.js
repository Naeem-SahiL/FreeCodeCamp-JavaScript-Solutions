function rot13(str) {
  let arr = str.split("")
  let alp = range(65,90) // all alphabets

  let shiftedArr = shiftArr(alp.slice(), 13) //shift by number

  arr.map(function(item, i){
    if((/[A-Z]/).test(item))
    {
      let c = item.charCodeAt()
      let ind = alp.indexOf(c)
      arr[i] = String.fromCharCode(shiftedArr[ind])
      // console.log(i)
    }
  })
  console.log(arr.join(""))
  return arr.join("");
}

function range(start, end) {
return Array(end - start + 1). fill(). map((_, idx) => start + idx)
}

function shiftArr(arr, n){
  for(let i = 0; i<n; i++)
  {
    let c = arr.shift()
    arr.push(c)
  }
  return arr
}
rot13("SERR PBQR PNZC");
