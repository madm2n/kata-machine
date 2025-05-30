const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    curr: Point,
    wall: string,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    if (curr.x < 0 || curr.x >= maze[0].length) {
        return false;
    }

    if (curr.y < 0 || curr.y >= maze.length) {
        return false;
    }

    const value = maze[curr.y][curr.x];

    if (value === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false;
    }

    seen[curr.y][curr.x] = true;

    // pre
    path.push(curr);

    // recurs
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        const next: Point = {
            x: curr.x + x,
            y: curr.y + y,
        };

        if (walk(maze, next, wall, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, start, wall, end, seen, path);

    return path;
}
