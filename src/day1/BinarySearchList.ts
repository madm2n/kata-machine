export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const idx = Math.floor(low + (high - low) / 2);
        const elem = haystack[idx];

        if (elem == needle) {
            return true;
        }

        if (elem > needle) {
            high = idx;
        } else {
            low = idx + 1;
        }
    } while (low < high);

    return false;
}
