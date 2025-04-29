export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        // find the first ball
        if (breaks[i]) {
            break;
        }
    }

    // go back to the last known jump point
    // search for the second ball
    i -= jumpAmount;

    for (let j = 0; j < jumpAmount; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
