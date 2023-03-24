let log = (value) => console.log(value);
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	print() {
		if (this.checkEmpty()) {
			log('list is empty');
			return;
		}
		let printStr = '';
		let cur = this.head;
		while (cur) {
			printStr += cur.prev ? ' <=  ' : 'null  <=  ';
			printStr += `${cur.value}`;
			printStr += cur.next ? '  =>' : '  =>  null';
			cur = cur.next;
		}
		return printStr;
	}

	checkEmpty() {
		if (!(this.head || this.size)) {
			return true;
		}
		return false;
	}

	insertAtHead(value) {
		let temp = new Node(null, value, this.head);
		if (this.checkEmpty()) {
			this.head = temp;
			this.size++;
			return;
		}
		this.head.prev = temp;
		this.head = temp;
		this.size++;
	}
	push(value) {
		if (this.checkEmpty()) {
			return this.insertAtHead(value);
		}
		let cur = this.head;
		while (cur.next) {
			cur = cur.next;
		}
		cur.next = new Node(cur, value, null);
		this.size++;
	}

	findNode(value) {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		}
		let cur = this.head;
		let pos = 0;
		while (cur) {
			pos++;
			if (cur.value === value) {
				log(`found at pos ${pos}`);
				return;
			}
			cur = cur.next;
		}
		log('not found');
		return;
	}

	deleteFirst() {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		}
		if (this.size === 1) {
			this.head = null;
			this.size--;
			log(`${this.head.value} deleted from head`);
		}
		log(`${this.head.value} deleted from head`);
		this.head.next.prev = null;
		this.head = this.head.next;
		this.size--;
	}

	deleteLast() {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		}
		if (this.size === 1) {
			return this.deleteFirst();
		}
		let cur = this.head;
		while (cur.next) {
			cur = cur.next;
		}
		log(`${cur.value} deleted from tail`);
		cur.prev.next = null;
		this.size--;
	}

	deleteAt(pos) {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		} else if (this.size < pos || pos < 1) {
			log('invalid position');
			return;
		}
		if (this.size === 1) {
			this.head = null;
			this.size--;
			log(`${this.head.value} deleted from head`);
		}
		if (pos === 1) {
			this.deleteFirst();
			return;
		}
		if (pos === this.size) {
			this.deleteLast();
			return;
		}
		let cur = this.head;
		let count = 1;
		while (cur) {
			if (pos === count) {
				log(`${cur.value} deleted from ${pos}`);
				cur.prev.next = cur.next;
				cur.next.prev = cur.prev;
				this.size--;
				return;
			}
			count++;
			cur = cur.next;
		}
	}

	sort() {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		}
		let cur = this.head;
		let arr = [];
		while (cur) {
			arr.push(cur.value);
			cur = cur.next;
		}
		arr.sort();
		let updated = new LinkedList();
		let temp = updated;
		while (temp.size !== this.size) {
			temp.push(arr[temp.size]);
		}
		this.head = updated.head;
		log(this.print());
	}

	swapNode(pos1, pos2) {
		if (this.checkEmpty()) {
			log('add value to the list first');
			return;
		}
		if (
			pos1 <= 0 ||
			pos2 <= 0 ||
			pos1 === pos2 ||
			pos1 > this.size ||
			pos2 > this.size
		) {
			log('invalid position');
			return;
		}
		if (pos1 > pos2) {
			//swapping
			[pos1, pos2] = [pos2, pos1];
		}
		let cur = this.head;
		let prev = null;
		let next = null;
		let temp = null;
		let count = 1;
		while (cur) {
			if (pos1 === count) {
				prev = cur;
			} else if (pos2 === count) {
				next = cur;
			}
			if (prev & next) {
				//break loop
				break;
			}
			cur = cur.next;
			count++;
		}
		temp = prev.value;
		prev.value = next.value;
		next.value = temp;
	}
}
class Node {
	constructor(prev = null, value, next = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

function mergeLinkedList(ll1, ll2) {
	if (ll1.checkEmpty()) {
		return ll2;
	}
	if (ll2.checkEmpty()) {
		return ll1;
	}
	let list1 = ll1.head;
	let list2 = ll2.head;
	let list3 = new LinkedList();

	while (list1 && list2) {
		if (list1.value < list2.value) {
			list3.push(list1.value);
			list1 = list1.next;
		} else {
			list3.push(list2.value);
			list2 = list2.next;
		}
		list3.size++;
	}

	while (list1) {
		list3.push(list1.value);
		list3.size++;
		list1 = list1.next;
	}
	while (list2) {
		list3.push(list2.value);
		list3.size++;
		list2 = list2.next;
	}
	return list3;
}

let dll = new LinkedList();
dll.insertAtHead(3);
dll.insertAtHead(1);
dll.push(4);
dll.push(5);
dll.insertAtHead(2);
dll.sort();
dll.swapNode(1, 5);
dll.swapNode(4, 2);
log(dll.print());
dll.findNode(1);
dll.deleteFirst();
dll.deleteAt(3);
dll.deleteLast();
dll.sort();
log(dll.print());
let dll1 = new LinkedList();
dll1.insertAtHead(8);
dll1.insertAtHead(7);
dll1.insertAtHead(6);
dll1.push(9);
dll1.push(10);
log(dll1.print());
let dll2 = mergeLinkedList(dll, dll1);
log(dll2.print());
