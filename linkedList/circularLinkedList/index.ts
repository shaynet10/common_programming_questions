import { ListNode } from '../types';

function createNode(value: number): ListNode {
    return { value, next: null };
}

function createCircular(values: number[]): ListNode {
    const root = createNode(values[0]);
    let current = root;
    for (let i = 1; i < values.length; i++) {
        current.next = createNode(values[i]);
        current = current.next;
    }
    current.next = root;
    return root;
}

function printList(amountJumps: number, root: ListNode) {
    let current: ListNode = root;
    for (let i = 0; i < amountJumps; i++) {
        console.log(current.value);
        if (current.next) {
            current = current.next;
        }
    }
}


const root = createCircular([1,2,3,4,5]);
printList(8, root);