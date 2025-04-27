export default function bs_list(haystack: number[], needle: number): boolean {
    let haystack_pointer = haystack;

    while (true) {
        const middle_idx = Math.floor(haystack_pointer.length / 2);
        const middle_elem = haystack_pointer[middle_idx];

        if (middle_elem == needle) {
            return true;
        }

        if (haystack_pointer.length == 1) {
            return false;
        }

        if (middle_elem > needle) {
            haystack_pointer = haystack_pointer.slice(0, middle_idx);
        } else {
            haystack_pointer = haystack_pointer.slice(middle_idx);
        }
    }
}
