// selection sort basically applies logic by selecting the smallest item and replacing it with the first item
// lowest is sorted first

function swap(arr, i, minIndex) {
	let temp = arr[minIndex];
	arr[minIndex] = arr[i];
	arr[i] = temp;
}

function selectionSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	//swap for all elements
	for (let i = 0; i < arr.length; i++) {
		let minIndex = i;
		//since smallest element is sorted so we don't need to swap it
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	return arr;
}

console.log(selectionSort([3, 2, 4, 6, 8, 1, 3, 1, 5]));
