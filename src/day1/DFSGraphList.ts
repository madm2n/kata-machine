function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }

    // pre
    path.push(curr);
    seen[curr] = true;

    if (curr === needle) {
        return true;
    }

    // recurse
    const list = graph[curr];

    for (let i = 0; i < list.length; i++) {
        const edge = list[i];

        if (edge.weight === 0) {
            continue;
        }

        const isFound = walk(graph, edge.to, needle, seen, path);

        if (isFound) {
            return true;
        }
    }

    //post
    path.pop();

    return false;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];
    const isFound = walk(graph, source, needle, seen, path);

    if (isFound) {
        return path;
    }

    return null;
}
