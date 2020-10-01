
exports.min = function min (array) {
  
  let minItem = 0
  if(!Array.isArray(array)) return minItem
  for (item of array) {
    if (minItem > item) minItem = item 
  }
  return minItem;
}

exports.max = function max (array) {
  let maxItem = 0
  if(!Array.isArray(array)) return maxItem
  for (item of array) {
    if (maxItem < item) maxItem = item
  }
  return maxItem;
}

exports.avg = function avg (array) {
  let itemAvg = 0
  if(!Array.isArray(array) || array.length===0) return itemAvg
  for (item of array) {
    itemAvg += item
  }
  return itemAvg/array.length;
}
