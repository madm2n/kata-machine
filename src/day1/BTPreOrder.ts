function visitNode(nodes: number[], node: BinaryNode<number>) {
    nodes.push(node.value);

    if (node.left) {
        visitNode(nodes, node.left);
    }
    if (node.right) {
        visitNode(nodes, node.right);
    }
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const nodes: number[] = [];
    visitNode(nodes, head);
    return nodes;
}
