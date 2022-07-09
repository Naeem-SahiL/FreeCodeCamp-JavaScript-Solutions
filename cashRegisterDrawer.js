let currencyUnit ={
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
}

function whichCoin(r){
  if(r >= 100){return 'ONE HUNDRED'}
  else if(r >= 20){ return 'TWENTY'}
  else if(r >= 10)
  {
    return 'TEN'
  }
  else if(r >= 5){
    return 'FIVE'
  }
  else if(r >= 1)
  {
    return 'ONE'
  }
  else if(r >= 0.25){
    return 'QUARTER'
  }
  else if(r >= 0.1){
    return 'DIME'
  }
  else if(r >= 0.05){
    return 'NICKEL'
  }
  else{
    return 'PENNY'
  }
}

function appendChange(amount, coin, drawerObj, change){
  // console.log(drawerObj[coin])
  let availableAmount = drawerObj[coin]

  if(availableAmount === 0)
  {
    return amount
  }
  else{
    let noOfCoins = Math.floor(amount/ currencyUnit[coin])//possible coins of amount
    let coinsAmount = noOfCoins * currencyUnit[coin]//amount of possible coins
    let remainingReturn = amount - coinsAmount
    remainingReturn=Number(remainingReturn.toFixed(2))
    if(coinsAmount > availableAmount)
    {
      if(coin === 'PENNY'){
        return -1
      }
      remainingReturn += coinsAmount-availableAmount
      change['change'].push([coin, availableAmount])
      drawerObj[coin] = 0
    }
    else{
      change['change'].push([coin, coinsAmount])
      drawerObj[coin] = availableAmount - coinsAmount
    }
    // console.log(change)
    return remainingReturn
  }
}
let coins = Object.keys(currencyUnit)

function getNextCoin(coin, drawerObj){
  // console.log(drawerObj)
  if(drawerObj[coin] === 0){
    return getNextCoin(coins[coins.indexOf(coin) - 1], drawerObj)
  }
  else
    return coin

}
//========================================================
//========================================================
//========================================================
function checkCashRegister(price, cash, cid) {
  let r = (cash - price).toFixed(2);
  let drawerObj = cid.reduce(function(obj, item){obj[item[0]] = item[1]
  return obj}, {})

  let change = {status: '', change: []}
  let pre = r

  while(r > 0){
    // console.log(r)
    pre = r
    let coin = whichCoin(r)

    if(drawerObj[coin] === 0)
    {
      coin = getNextCoin(coin, drawerObj)
    }
    r = appendChange(r, coin, drawerObj, change)
    if(pre === r)
      break
  }
  if(r === -1){
    change['status']='INSUFFICIENT_FUNDS'
  }
  else if(r > 0)
  {
    change['status']='CLOSED'
    change['change']=cid
  }
  else{
    change['status']='OPEN'
  }

  return change;
}

checkCashRegister(19.6, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
