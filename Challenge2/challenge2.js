function majority(numbers) {
  let majorThreshold = numbers.length / 2;
  let map = {};

  for (let i = 0; i < numbers.length; i++) {
    if (map[numbers[i]]) {
      map[numbers[i]]++;
    } else {
      map[numbers[i]] = 1;
    }

    if (map[numbers[i]] >= majorThreshold) {
      return numbers[i];
    }
  }
}
// console.log(majority([2,2,1,1,1,2,2,5]));
