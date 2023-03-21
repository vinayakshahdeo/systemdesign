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
}
class Node {
	constructor(prev = null, value, next = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}
}

let dll = new LinkedList();
// dll.findNode(1000);
dll.insertAtHead(3);
dll.insertAtHead(2);
dll.insertAtHead(1);
dll.push(4);
dll.push(5);
dll.findNode(1);
log(dll.print());
