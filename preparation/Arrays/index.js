// array questions and answers
var findKthLargest = function (nums, k) {
	nums.sort((a, b) => a - b);
	return nums[nums.length - k];
};

console.log(findKthLargest([2, 4, 6, 5, 1, 3], 2)); //5 since 6 is largest and 5 is second largest

var findKthSmallest = function (nums, k) {
	nums.sort((a, b) => a - b);
	return nums[k - 1];
};
console.log(findKthSmallest([2, 4, 6, 5, 1, 3], 2)); //2 since 1 is smallest and 2 is second smallest
