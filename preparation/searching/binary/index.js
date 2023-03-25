var arr = [1, 3, 5, 7, 9];

function binarySearchIterative(key) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		if (key === arr[mid]) {
			return `found at ${mid + 1}`;
		}
		if (key < arr[mid]) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return `not found`;
}

function binarySearchRecursive(arr, low, high, key) {
	let mid = Math.floor((low + high) / 2);
	if (low <= high) {
		if (arr[mid] === key) {
			return `found at ${mid + 1}`;
		}
		if (key < arr[mid]) {
			return binarySearchRecursive(arr, low, mid - 1, key);
		} else {
			return binarySearchRecursive(arr, mid + 1, high, key);
		}
	}
	return `not found`;
}
for (let i = 0; i < arr.length; i++) {
	setTimeout(() => {
		console.log(binarySearchIterative(arr[i]));
		console.log(binarySearchRecursive(arr, 0, 4, arr[i]));
	}, i * 2000);
}
