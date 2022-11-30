import { readNumericLines } from "./util/read-numeric-lines.js";

const solve = async function () {
    const lines = await readNumericLines('data/day-01-01.txt');
    for (const number of lines) {
        console.log(number)
    }
    console.log(lines)
}()
