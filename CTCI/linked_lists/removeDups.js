// i: unsorted LinkedList<any>
// o: side effect, LinkedList<any> doesn't have any dupes
// e: LinkedList doesn't have any duplicates, LinkedList is empty
// c: n/a, no temporary buffer allowed

// create a list to hold all non-dupe values
// create a holding variable to reference the previous node
  // set to null for the initial node
// iterate through every node in the linked list so long as node is not null
  // if the list contains the current node value
    // set the previous node's next value to point to the current node's next value
  // else
    // add the current node's value to the holding list
    // set the previous variable to the current node
  // set the current node to the next node

// const removeDups = node => {
//   const valList = [];
//   let previous = null;
//   let n = node;

//   while (n !== null) {
//     if (valList.includes(n.value)) {
//       previous.next = n.next;
//     } else {
//       valList.push(n.value);
//       previous = n;
//     }
//     n = n.next;
//   }
// };

// time-complexity: O(n)
// space-complexity: O(1)

//---No Buffer---//

// iterate through every node in the linked list
  // at every 'current' node
    // set a variable to 'subsequent' and assign it to current.next
    // set a variable to hold the 'previous' node and assign it to the current node
    // send a 'runner' to check every subsequent node to see if its value matches the current node's value
      // if so
        // set the previous node's next value to dupe node's next value
    // assign subsequent to the next node
  // assign the 'current' node to the next node

const removeDups = node => {

  let n = node;
  while (n !== null) {
    let subsequent = n.next;
    let previous = n;
    while (subsequent !== null) {
      if (subsequent.value === n.value) {
        previous.next = subsequent.next;
      } else {
        previous = subsequent;
      }
      subsequent = subsequent.next;
    }
    n = n.next;
  }
};

// time-complexity: O(n^2)
// space-complexity: O(1)

module.exports = removeDups;
