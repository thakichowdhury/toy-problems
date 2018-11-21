// i: singly-linked Linked List, int
// o: Node, kth to last
// e: k > length of Linked List, k <= 0
// c: n/a, recursive solution

// create a node holding array
// iterate through through nodes in list while node is not null
  // push each node into the holding array
// return the node in the array that's the length of the array - k


// const printKthToLast = (head, k) => {
//   const nodes = [];
//   let n = head;
//   while (n !== null) {
//     nodes.push(n);
//     n = n.next;
//   }
//   return nodes[nodes.length - k];
// }

// time-complexity: O(n)
// space-complexity: O(1)

//---recursive---//
const printKthToLast = (n, k, depth = 1) => {
  if (n === null) {
    return depth - k;
  }
  const result = printKthToLast(n.next, k, depth + 1);
  if (result === depth) {
    return n;
  } else {
    return result;
  }
}

// time-complexity: O(n)
// space-complexity: O(1)

module.exports = printKthToLast;
