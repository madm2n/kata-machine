export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    seen[source] = true;

    const prev = new Array(graph.length).fill(-1);
    const queue: number[] = [source];
    let curr: number = -1;
    let found: boolean = false;

    do {
        curr = queue.pop() as number;

        if (curr === needle) {
            found = true;
            break;
        }

        const children: number[] = graph[curr];

        for (let i = 0; i < children.length; i++) {
            const weight = children[i];

            if (weight == 0) {
                continue;
            }

            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            queue.push(i);
        }
    } while (queue.length > 0);

    if (!found) {
        return null;
    }

    const path: number[] = [];

    while (curr != -1) {
        path.unshift(curr);
        curr = prev[curr];
    }

    return path;
}
