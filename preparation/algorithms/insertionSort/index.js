//this algo works by buidling the sorted array in the beginning of the array itself
//it begins the sort by selecting first element in the array and it adds the element into the sorted array in backwards position.
//it keeps on comparing and swappign elements until the current array becomes empty and sorted array is length of original array

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			} else {
				break;
			}
		}
	}
	return arr;
}

console.log(insertionSort([2, 4, 6, 8, 8, 8, 8, 8, 9, 1, 3, 5, 7, 7, 7, 7, 9]));
