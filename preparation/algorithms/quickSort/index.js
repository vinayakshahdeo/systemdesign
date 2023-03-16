// this algo works on the logic of pivot element and the logic is by selecting one element we sort rest of them

//ex: if I am tallest in class I can go to last and one part of the class will be shorter than the tallest guy.

// It requires partitioning and minimum 2 elements to work

function swap(items, leftIndex, rightIndex) {
	var temp = items[leftIndex];
	items[leftIndex] = items[rightIndex];
	items[rightIndex] = temp;
}
function partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)]; //middle element
	let i = left; //left pointer
	let j = right; //right pointer
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j); //sawpping two elements
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	if (items.length > 1) {
		var index = partition(items, left, right); //index returned from partition

		if (left < index - 1) {
			//more elements on the left side of the pivot

			quickSort(items, left, index - 1);
		}
		if (index < right) {
			//more elements on the right side of the pivot

			quickSort(items, index, right);
		}
	}
	return items;
}
// first call to quick sort
var sortedArray = quickSort(
	[5, 3, 7, 7, 6, 6, 2, 9],
	0,
	[5, 3, 7, 7, 6, 6, 2, 9].length - 1
);
console.log({ sortedArray }); //[2,3,5,6,6,7,7,2,9]

function quickSortLoop(array) {
	let len = array.length;
	if (len <= 1) return array;

	let pivot = array.pop();

	let left = [],
		right = [];
	array.forEach((item) => {
		if (item < pivot) {
			left.push(item);
		} else {
			right.push(item);
		}
	});
	return quickSortLoop(left).concat(pivot, quickSortLoop(right));
}

quickSortLoop([9, 8, 7, 7, 1, 2, 6, 5, 4, 3]);
