/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
   let newItem = new Node(val);
   const oldItem = this.first;

   if (this.first === null && this.last === null) {
      this.first = newItem;
      this.last = newItem;
   } 
   this.first = newItem;
   this.first.next = oldItem;
   this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
   const value = this.first.val;
   if (this.size === 0) {
      throw new Error("There is nothing here!")
   } else {
      this.first = this.first.next;
   }
   this.size -= 1;
   return value;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
   return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
   if (this.size === 0) {
      return true;
   } else {
      return false;
   }
  }
}

module.exports = Stack;