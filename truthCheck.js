function truthCheck(collection, pre) {
  let flag = true
  collection.map(function(item){
    if(!Boolean(item[pre]))
      {flag = Boolean(item[pre])
      return}
    console.log(item)
  })
  return flag;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role");
