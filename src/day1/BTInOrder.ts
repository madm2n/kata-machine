function visitNode(nodes: number[], node: BinaryNode<number>) {
    if (node.left) {
        visitNode(nodes, node.left);
    }

    nodes.push(node.value);

    if (node.right) {
        visitNode(nodes, node.right);
    }
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const nodes: number[] = [];
    visitNode(nodes, head);
    return nodes;
}
