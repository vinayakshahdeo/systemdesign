//In js we don't have a context for linked lists so we need to define a class and link them as objects

class SinglyLinkedList {
	constructor() {
		this.head = null; //intialize head as null
		this.size = 0;
	}

	insertAtHead(value) {
		const temp = new Node(value);
		temp.next = this.head;
		this.head = temp;
		this.size++;
	}

	checkEmptyList() {
		if (!(this.head || this.size)) {
			console.log('add elements first');
			return true;
		}
		return false;
	}

	print() {
		let cur = this.head;
		if (this.checkEmptyList()) {
			return 'No elements';
		}
		let printStr = '';
		while (cur) {
			printStr += cur.value;
			if (cur.next) {
				printStr += ' =>  ';
			}
			cur = cur.next;
		}
		return printStr;
	}

	insertAtTail(value) {
		let cur = this.head;
		if (this.checkEmptyList()) {
			return this.insertAtHead(value);
		}
		const temp = new Node(value);
		while (cur.next !== null) {
			cur = cur.next;
		}
		this.size++;
		cur.next = temp;
	}

	reverse() {
		let cur = this.head;
		if (this.checkEmptyList() || this.size === 1) {
			console.log('Add elements to array to reverse');
			return;
		}
		let prev = null,
			next = null;
		while (cur) {
			next = cur.next;
			cur.next = prev;
			prev = cur;
			cur = next;
		}
		this.head = prev;
	}

	addAtIndex(keyIndex, value) {
		if (this.checkEmptyList()) {
			return;
		}
		let cur = this.head;
		let pos = 0;
		if (keyIndex > this.size || this.size < 1) {
			console.log(`this location doesn't exist`);
			return;
		}
		while (cur) {
			cur = cur.next;
			if (pos++ === keyIndex - 1) {
				const temp = new Node(value);
				temp.next = cur.next;
				cur.next = temp;
				console.log('inserted at pos', pos);
				return;
			}
		}
	}

	getSize() {
		return this.size;
	}

	sort() {
		if (this.checkEmptyList() || this.size === 1) {
			return;
		}
		let cur = this.head;
		let arr = [];
		while (cur) {
			arr.push(cur.value);
			cur = cur.next;
		}
		this.insertFromArray(arr.sort((a, b) => a - b));
	}

	insertFromArray(arr) {
		if (this.checkEmptyList() || this.size === 1 || !arr.length) {
			return;
		}
		let temp = new SinglyLinkedList();
		let i = 0;
		while (i < arr.length) {
			temp.insertAtTail(arr[i++]);
		}
		this.head = temp.head;
		temp.head = null;
	}
	findKElementFromEnd(k) {
		if (this.checkEmptyList() || this.size < k) {
			return;
		}
		let cur = this.head;
		let temp = this.head;
		while (temp) {
			if (k-- <= 0) {
				cur = cur.next;
			}
			temp = temp.next;
		}
		console.log(`position from end is : `, cur.value);
	}
	removeFromHead() {
		if (this.checkEmptyList()) {
			return;
		}
		let cur = this.head;
		let next = cur.next;
		this.size--;
		console.log(`${this.head.value} was deleted from list`);
		this.head = next;
	}

	removeFromTail() {
		if (this.checkEmptyList()) {
			return;
		}
		let cur = this.head;
		let next = cur.next;
		if (!next) {
			console.log(`${this.head.value} was deleted from list`);
			this.head = null;
			this.size--;
			return;
		}
		while (next) {
			if (next.next) cur = cur.next;
			next = next.next;
		}
		console.log(`${cur.next.value} was deleted from list`);
		this.size--;
		cur.next = null;
	}

	removeFromPos(k) {
		if (this.checkEmptyList() || k < 0 || k > this.size) {
			return;
		}
		if (k === 0) {
			this.removeFromHead();
		} else if (k === this.size) {
			this.removeFromTail();
		}
		let cur = this.head;
		let prev = null;
		let next = cur;
		let pos = 0;
		while (next) {
			prev = cur;
			cur = next;
			if (pos === k) {
				this.size--;
				console.log(`${cur.value} was deleted from ${pos}`);
				prev.next = next.next;
				break;
			}
			next = next.next;
			pos++;
		}
	}

	middleOfLinkedList() {
		if (this.checkEmptyList()) {
			return;
		}
		if (this.size === 1) {
			return this.head;
		}
		let cur = this.head;
		let pos =
			this.size % 2 !== 0
				? Math.floor(this.size / 2)
				: Math.floor(this.size / 2) + 1;
		while (pos > 0) {
			cur = cur.next;
			pos--;
		}
		console.log(`${cur.value} is middle of sll`);
	}
}

class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

let sll = new SinglyLinkedList();
sll.insertAtHead(1);
sll.insertAtTail(5);
sll.insertAtTail(3);
sll.insertAtTail(2);
sll.insertAtTail(12);
sll.insertAtTail(13);
sll.addAtIndex(3, 8);
sll.sort();
// console.log(sll.print());

let sll1 = new SinglyLinkedList();
sll1.insertAtHead(4);
sll1.insertAtTail(6);
sll1.insertAtTail(9);
sll1.addAtIndex(2, 10);
sll1.insertAtTail(13);
sll1.sort();
// console.log(sll1.print());
function mergeSortedKList(list1, list2) {
	let list1Head = list1.head;
	let list2Head = list2.head;
	if (!list1Head && !list2Head) {
		console.log('values missing');
		return null;
	}
	if (!list2Head) {
		return list1Head;
	}
	if (!list1Head) {
		return list2Head;
	}
	let result = new SinglyLinkedList();
	while (list1Head && list2Head) {
		if (list1Head.value <= list2Head.value) {
			result.insertAtTail(list1Head.value);
			list1Head = list1Head.next;
		} else {
			result.insertAtTail(list2Head.value);
			list2Head = list2Head.next;
		}
	}
	while (list1Head) {
		result.insertAtTail(list1Head.value);
		list1Head = list1Head.next;
	}
	while (list2Head) {
		result.insertAtTail(list2Head.value);
		list2Head = list2Head.next;
	}
	result.size = list1.getSize() + list2.getSize();
	return result;
}

let sll2 = mergeSortedKList(sll, sll1);
console.log(sll2.print());
sll2.findKElementFromEnd(2);
sll2.removeFromHead();
sll2.removeFromTail();
console.log(sll2.print());
sll2.removeFromPos(2);
console.log(sll2.print());
sll2.middleOfLinkedList();
// let sll3 = new SinglyLinkedList();
// sll3.insertAtHead(1);
// sll3.removeFromHead();
// sll3.removeFromTail();
// console.log(sll3.print());
