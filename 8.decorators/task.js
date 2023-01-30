//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objIndex = cache.findIndex((item) => item.hash == hash);
    if(objIndex != -1) {
        console.log("Из кэша: " + cache[objIndex].value);
        return ("Из кэша: " + cache[objIndex].value);
    }
  let result = func(...args);
  cache.push({
     hash: hash, 
     value: result
  })
  if(cache.length > 5) {
    cache.shift();
  }
  console.log("Вычисляем: " + result);
  return ("Вычисляем: " + result);
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
  function wrapper(...args) {
    setTimeout(() => func(...args), delay);
 }
 
 return wrapper;
}
