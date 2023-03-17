//the logic behind merge sort is sorting and merging k arrays
// we have 2 arrays A and B we create 3 pointers one for array 1 other for array 2 and 3rd for result
//we compare A[i] and B[j] smallest gets pushed in the stack and pointer moves only for that array and result array
//at the end we run loop to other arrays to add those elements into the list

function mergeArrays(leftArr, rightArr) {
	//get 2 sections of array
	let arr = []; //result array
	while (leftArr.length && rightArr.length) {
		//while they are not null
		if (leftArr[0] < rightArr[0]) {
			// if left is less than right
			arr.push(leftArr.shift()); //push first element of left subarray into arr
		} else {
			//if right is more than left
			arr.push(rightArr.shift()); //push first element of right subarray into arr
		}
	}
	return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	return mergeArrays(
		arr.splice(0, Math.floor(arr.length / 2)),
		mergeSort(arr)
	);
}

console.log(mergeSort[(2, 4, 6, 8, 3, 5, 7, 9)]);
