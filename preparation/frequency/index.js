function countFrequency(arr) {
	let obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(arr[i])) {
			obj[arr[i]] += 1;
		} else {
			obj[arr[i]] = 1;
		}
	}
	return obj;
}

const arr = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4,
	4, 4, 4, 4, 5, 5, 6, 6, 6, 7,
];

// console.log(countFrequency(arr));

const string =
	'avshfdaoalksnfkjfasdnhdanvnucxecfjawqeiuryuewotopiqouyghfdsjvcmfkeljrwuqwypoiuiuwhxoimewqjfmxijqewoifnxmfx,qmjfxoiqm';
console.log(countFrequency(string));
