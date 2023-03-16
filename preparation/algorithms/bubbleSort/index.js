// In bubble sort the first element sorted is the largest one

function bubbleSortLoop(arr) {
	//edge cases where array is null or array is of size 1
	if (!arr.length || arr.length === 1) {
		return arr;
	}
	//using flag to make it adaptive
	var flag = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		//i is used here so that in next comparison we want one comparison to reduce
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				flag = 1;
			}
		}
		if (!flag) {
			return arr;
		}
	}
	return arr;
}

bubbleSortLoop([1, 5, 3]);

function bubbleSortRecursive(arr, n) {
	if (n === 1) {
		return;
	}
	for (let j = 0; j < n - 1; j++) {
		if (arr[j] > arr[j + 1]) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
	bubbleSortRecursive(arr, n - 1);
}
bubbleSortRecursive([1, 5, 3], 3);
