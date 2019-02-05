const letterList = ['a', 'b', 'c'];
const numberList = [1, 2, 3];

function ZipList(listA, listB) {
  const zippedList = [];
  for (let i = 0; i < listA.length; i++) {
    zippedList.push(listA[i], listB[i]);
  }
  return zippedList;
}

console.log(ZipList(letterList, numberList));

function ZipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(ZipListTheSimpleWay(letterList, numberList));
