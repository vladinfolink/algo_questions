// 1. Given an array of N distinct natural numbers, how many pairs of numbers sum up to a given number S?
  const pairCounter = (arr, S) => {
  let results = [];
  for (let n=0; n<arr.length; n++) {
    for (let j=n+1; j<arr.length; j++) {
      if (arr[j] === S - arr[n]) {
        results.push([arr[n], arr[j]])
      }
    }
  }
  return results.length;
}

pairCounter([-1, 2, 3, 4, 5, 6, 7, 8], 7);

// 1. Given an array of N distinct natural numbers, how many pairs of numbers sum up to a given number S?

const pairCounter = function (arr, S) {
  let res = 0;
  arr.forEach((item) => {
    if (arr.includes(S - item)) {
      arr[arr.indexOf(item)] = null;
      res++;
    };
  });
  return res;
}

// pairCounter([-1, 2, 3, 4, 5, 6, 7, 8], 7);

// Given an array of N natural numbers, find the number that appears more than N/2 times.

const findNum = (arr) => {
	const pairs = [];
	 arr.sort().reduce((ini, num) => {
		return [...ini, [num, 1]]
	}, []).forEach((item) => {
		if (pairs.length === 0) {
			pairs.push(item)
		}else if ( pairs[0][0] === item[0]) {
			pairs[0][1]++
		} else {
			pairs.unshift(item)
		}
	});
	return pairs.filter((e) => {
		return e[1] > arr.length/2
	})[0][0]
}

// findNum([1, 1, 2, 3, 6, 5, 4, 4, 4, 4, 4, 4, 4])


















