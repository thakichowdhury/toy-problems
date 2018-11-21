const { getAllNodeValues } = require('./util');
const { LinkedList } = require('../../structures/LinkedList');

describe('removeDups', () => {
  const removeDups = require('./removeDups');
  const oneNodeList = new LinkedList;
  oneNodeList.appendToTail('A');

  const threeDupeLinkedList = new LinkedList();
  threeDupeLinkedList.appendToTail('A');
  threeDupeLinkedList.appendToTail('B');
  threeDupeLinkedList.appendToTail('A');
  threeDupeLinkedList.appendToTail('C');
  threeDupeLinkedList.appendToTail('D');
  threeDupeLinkedList.appendToTail('A');
  threeDupeLinkedList.appendToTail('E');
  threeDupeLinkedList.appendToTail('A');

  const listWithDupes = ['A', 'B', 'A', 'C', 'D', 'A', 'E', 'A'];
  const listWithoutDupes = ['A', 'B', 'C', 'D', 'E'];

  it('should get all nodes from linked list', () => {
    expect(getAllNodeValues(threeDupeLinkedList.head)).toEqual(listWithDupes);
  })

  it('should not alter a one node linked list', () => {
    removeDups(oneNodeList.head)
    expect(getAllNodeValues(oneNodeList.head)).toEqual(['A']);
  })

  it('should remove all dupes from linked list', () => {
    removeDups(threeDupeLinkedList.head);
    expect(getAllNodeValues(threeDupeLinkedList.head)).toEqual(listWithoutDupes);
  })
});

describe('printKthToLast', () => {
  const printKthToLast = require('./printKthToLast');
  const list = new LinkedList();
  list.appendToTail('A');
  list.appendToTail('B');
  list.appendToTail('C');
  list.appendToTail('D');
  list.appendToTail('E');
  list.appendToTail('F');

  it('should return the kth to last node', () => {
    expect(printKthToLast(list.head, 3, 1).value).toEqual('D')
  })
})
