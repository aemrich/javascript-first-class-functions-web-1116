function receivesAFunction (fnctn) {
  fnctn()
}

function returnsANamedFunction () {
  return function fnctn() {}
}

function returnsAnAnonymousFunction () {
  return function () {}
}
