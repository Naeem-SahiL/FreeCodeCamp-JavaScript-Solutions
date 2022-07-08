function lessThan100(num)
{
  let str = ''
  let n = Math.floor(num/10)

  let r = num%10
  if(n>=9)
  {
    str = 'XC'
  }
  else if(n >= 5){
    str = 'L'
    str += 'X'.repeat(n - 5)
  }
  else if(n >= 4)
  {
    str = 'XL'
    str += 'X'.repeat(n - 4)
  }
  else{
    str += 'X'.repeat(n)
  }

  if(r===9)
  {
    str += 'IX'
  }
  else if(r >= 5){
    str += 'V'
    str += 'I'.repeat(r - 5)
  }
  else if(r === 4)
  {
    str += 'IV'
  }
  else{
    str += 'I'.repeat(r)
  }
  return str
}
function lessThan1000(num)
{
    
  let str = ''
  let n = Math.floor(num/100)
  let r = num%100
  if(n>=9)
  {
    str = 'CM'
  }
  else if(n >= 5){
    str = 'D'
    str += 'C'.repeat(n - 5)
  }
  else if(n >= 4)
  {
    str = 'CD'
    str += 'C'.repeat(n - 4)
  }
  else{
    str += 'C'.repeat(n)
  }
  str += lessThan100(r)
  return str
}

//main function
function convertToRoman(num) {
  let str = ''
  if(num >= 1000)
  {
    let n = Math.floor(num/1000)
    let r = num%1000
    str = 'M'.repeat(n)
    str += lessThan1000(r)
  }
  if(num < 1000){
    str = lessThan1000(num)
  }
  else if(num < 100){
    str = lessThan100(num)
  }
 return str;
}


convertToRoman(400);
