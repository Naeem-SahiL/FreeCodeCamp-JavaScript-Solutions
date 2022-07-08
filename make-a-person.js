const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  // console.log(firstAndLast)
  
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function() {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function(first) {
    let arr = firstAndLast.split(" ")
    arr[0] = first
    firstAndLast = arr.join(" ");
  };
  this.setLastName = function(last) {
    let arr = firstAndLast.split(" ")
    arr[1] = last
    firstAndLast = arr.join(" ");
  };
  this.setFullName = function(fullName) {
    
    firstAndLast = fullName;
  };
  // return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName())
console.log(bob.firstName)
