// Write your solution here!

// define `drivers` array 
const drivers = ["Milo", "Otis", "Garfield"]

// append new driver to end of array
function destructivelyAppendDriver(Ralph) {
  (drivers.push("Ralph"))
}

// prepend new driver to start of array
function destructivelyPrependDriver(Bob) {
  (drivers.unshift("Bob"))
}

// remove driver from end of array
function destructivelyRemoveLastDriver() {
  (drivers.pop())
}

// remove driver from start of array
function destructivelyRemoveFirstDriver() {
  (drivers.shift())
}



