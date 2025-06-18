export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    seen[source] = true;

    const prev = new Array(graph.length).fill(-1);
    const queue: number[] = [source];

    do {
        const curr = queue.pop() as number;

        if (curr === needle) {
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

    const path: number[] = [];
    let pathCurr = prev[needle];

    while (pathCurr != -1) {
        path.unshift(pathCurr);
        pathCurr = prev[pathCurr];
    }

    if (path.length > 0) {
        return [...path, needle];
    }

    return null;
}
