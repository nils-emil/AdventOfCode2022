import {readLines} from "./util/read-lines.js";

function contains(elfOne, elfTwo) {
    return elfOne[0] >= elfTwo[0] && elfOne[1] <= elfTwo[1];
}

const solve = async function () {
    const lines = await readLines('data/day-04-02.txt');
    const pairs = [];
    for (const line of lines) {
        let pair = line.split(",");
        const firstRange = pair[0].split("-").map(e => Number(e))
        const secondRange = pair[1].split("-").map(e => Number(e))
        pairs.push({one: firstRange, two: secondRange})
    }
    let counter = 0;
    for (const pair of pairs) {
        let elfOne = pair.one
        let elfTwo = pair.two
        if (contains(elfOne, elfTwo) || contains(elfTwo, elfOne)) {
            counter++;
        }
    }
    console.log(counter)
}()
