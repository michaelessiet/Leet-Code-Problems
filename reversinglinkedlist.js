//reversing a linked list
//a -> b -> c -> d -> e -> null
//e -> d -> c -> b -> a -> null

function reverseLinkedList(node) {
  //sets previous value to null i.e the head of the list
  let prev = null;
  //gets the current value of the node
  let current = node;
  
  let next = null;

  while (current !== null) {
    //sets next to the next value of the current node
    next = current.next;
    //sets the next value of the current node to the previous value
    current.next = prev;
    //sets the previous value to the current value
    prev = current;
    //sets the current value to the next value
    current = next;
  }
  return prev;
}