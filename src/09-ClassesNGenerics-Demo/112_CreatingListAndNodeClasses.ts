// 112. Creating List & Node Classes
// 113. Making the Class Generic
// 114. Adding an "add" Method
// 115. Adding Items More Efficiently
// 116. Accessing the Data & Compiling + Running the Code
// 117. Finishing the Linked List

class ListNode<T> {
  next?: ListNode<T>;

  constructor(public value: T) {}
}

class LinkedList112<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode<T>(value);
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  getNumberOfItems(): number {
    return this.length;
  }

  print() {
    let currentNode = this.root;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const numberList = new LinkedList112<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);

console.log(`Number of items in numberList: ${numberList.getNumberOfItems()}`);
numberList.print();

const nameList = new LinkedList112<string>();
