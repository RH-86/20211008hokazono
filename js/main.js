const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);


function leapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    return true;
  }
  return false;
}

const checkYear = [2020, 2021];
const checkYearMap = checkYear.map(function (item) {
  if (leapYear(checkYear)) {
    return item + '年はうるう年です';
  } else {
    return item + '年はうるう年ではありません';
  }
});

console.log(checkYearMap);