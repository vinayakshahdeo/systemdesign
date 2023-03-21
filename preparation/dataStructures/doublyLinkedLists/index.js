class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	print() {
		if (this.checkEmpty()) {
			console.log('list is empty');
			return;
		}
	}

	checkEmpty() {
		if (!(this.head || this.size)) {
			return true;
		}
		return false;
	}
}
class Node {
	constructor(prev = null, value, head = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}
