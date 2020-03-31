/******************
 * YOUR CODE HERE *
 ******************/

const firstNumberIsLess = function(a, b) {
  if(a < b) {
    return -1;
  } else if(a == b) {
    return 0;
  } else if(a > b) {
    return 1;
  } else {
    return "OH NOO WTF!!";
  }
}

const secondNumberIsLess = function(b, a) {
  if(a < b) {
    return -1;
  } else if(a == b) {
    return 0;
  } else if(a > b) {
    return 1;
  } else {
    return "OH NOO WTF!!";
  }
}

const firstNameIsFirstAlphabetically = function(a, b) {
  if(a == b) {
    return 0;
  }

  let min = Math.min(a.length, b.length);

  for(let i = 0; i < min; i++) {
    if(a[i] < b[i]) {
      return -1;
    }
    if(a[i] > b[i]) {
      return 1;
    }
  }
  if(a.length < b.length) {
    return -1;
  }
  if(a.length > b.length) {
    return 1;
  }
  return "WTF"
}

const firstLastNameIsFirstAlphabetically = function(a, b) {
  a = a.match(/ +([^ ]+)/);
  b = b.match(/ +([^ ]+)/);

  a = (a == null) ? "" : a[1];
  b = (b == null) ? "" : b[1];

  return firstNameIsFirstAlphabetically(a, b);
}

const trueIsFirst = function(a, b) {
  if(a == true && b == false) {
    return -1;
  } else if(a == false && b == true) {
    return 1;
  } else if(a == b) {
    return 0;
  } else {
    return "WTF";
  }
}

const sortByNumberAscending = function(nums) {
  let newArray = nums.slice();

  newArray.sort(firstNumberIsLess);

  return newArray;
}

const sortByNumberDescending = function(nums) {
  let newArray = nums.slice();

  newArray.sort(secondNumberIsLess);

  return newArray;
}

const truesFirst = function(bools) {
  let newArray = bools.slice();

  newArray.sort(trueIsFirst);

  return newArray;
}

const sortByNameAscending = function(names) {
  let newArray = names.slice();

  newArray.sort(firstNameIsFirstAlphabetically);

  return newArray;
}

const sortByLastNameAscending = function(names) {
  let newArray = names.slice();

  newArray.sort(firstLastNameIsFirstAlphabetically);

  return newArray;
}

/************************
// ITERATION FUNCTIONS
 ************************/




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
