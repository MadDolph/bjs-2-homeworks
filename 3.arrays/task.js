function compareArrays(arr1, arr2) {
  return (arr1.length == arr2.length) && arr1.every((el, i) => el == arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(item => item.gender == gender).reduce(function(accum, item, index, arr) {
    return arr.length !== index + 1 ? accum + item.age: (accum + item.age) / arr.length;       
  }, 0) 
}