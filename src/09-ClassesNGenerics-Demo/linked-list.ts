//112. Creating List & Node Classes

// class LinkedList {
//   private head: Node | null = null;
//   private tail: Node | null = null;

//   add(value: any): void {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       if (this.tail) {
//         this.tail.next = newNode;
//       }
//       this.tail = newNode;
//     }
//   }

//   print(): void {
//     let current = this.head;
//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
// }
