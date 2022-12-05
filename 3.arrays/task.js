function compareArrays(arr1, arr2) {
  const compare = (arr1.length == arr2.length) && arr1.every((el, i) => el == arr2[i]);

  return compare;
}

function getUsersNamesInAgeRange(users, gender) {
  const result = users.filter(item => item.gender == gender).reduce(function(accum, item, index, arr) {
    if(arr.length !== (index + 1)) {
        accum += item.age;
      } else {     
        accum += item.age;
        accum = accum / arr.length;
      }
    return accum;
  }, 0) 

  return result;
}