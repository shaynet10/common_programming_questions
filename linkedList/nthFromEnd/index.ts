type ListNode = {
    value: number;
    next: ListNode | null;
}

function createNode(value: number): ListNode {
    return { value, next: null };
}


