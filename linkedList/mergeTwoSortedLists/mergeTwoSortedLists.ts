class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value: number, next: ListNode | null = null) {
        this.value = value;
        this.next = next;
    }
}

function mergeTwoSrotedLists(sortedList1: ListNode | null, sortedList2: ListNode | null): ListNode | null {
    if (sortedList1 === null && sortedList2 === null) {
        return null;
    }
    if (sortedList1 === null) {
        return sortedList2;
    }
    if (sortedList2 === null) {
        return sortedList1;
    }

    let sorted: ListNode | null = null;
    let sortedCurrent;
    if (sortedList1.value < sortedList2.value) {
        sorted = new ListNode(sortedList1.value);
        sortedCurrent = sorted;
        sortedList1 = sortedList1.next;
    } else {
        sorted = new ListNode(sortedList2.value);
        sortedCurrent = sorted;
        sortedList2 = sortedList2.next;
    }
    
    while (sortedList1 !== null && sortedList2 !== null) {
        if (sortedList1.value < sortedList2.value) {
            sortedCurrent.next = new ListNode(sortedList1.value);
            sortedList1 = sortedList1.next;
        } else {
            sortedCurrent.next = new ListNode(sortedList2.value);
            sortedList2 = sortedList2.next;
        }
        sortedCurrent = sortedCurrent.next;
    }

    while (sortedList1 !== null) { // SortedList1 leftovers.
        sortedCurrent.next = new ListNode(sortedList1.value);
        sortedCurrent = sortedCurrent.next;
        sortedList1 = sortedList1.next;
    }

    while (sortedList2 !== null) { // SortedList2 leftovers.
        sortedCurrent.next = new ListNode(sortedList2.value);
        sortedCurrent = sortedCurrent.next;
        sortedList2 = sortedList2.next;
    }

    return sorted;
}

const list1 = new ListNode(1, new ListNode(3));
const list2 = new ListNode(2, new ListNode(4));
const merged = mergeTwoSrotedLists(list1, list2);

console.log('list1: ', list1);
console.log('list2: ', list2);
console.log('merged: ', merged);