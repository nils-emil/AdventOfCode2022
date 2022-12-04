import {readLines} from "./util/read-lines.js";

function getAllNumbers(elfOne) {
    const elfOneNumbers = []
    for (let i = elfOne[0]; i <= elfOne[1]; i++) {
        elfOneNumbers.push(i)
    }
    return elfOneNumbers;
}

function contains(elfOne, elfTwo) {
    const elfOneNumbers = getAllNumbers(elfOne);
    const elfTwoNumbers = getAllNumbers(elfTwo);
    for (const elfTwoNumber of elfTwoNumbers) {
        if (elfOneNumbers.indexOf(elfTwoNumber) >= 0) {
            return true;
        }
    }
    return false;
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
