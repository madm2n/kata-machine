function visitNode(nodes: number[], node: BinaryNode<number>) {
    if (node.left) {
        visitNode(nodes, node.left);
    }

    if (node.right) {
        visitNode(nodes, node.right);
    }

    nodes.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const nodes: number[] = [];
    visitNode(nodes, head);
    return nodes;
}
