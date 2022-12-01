import {readNumericLines} from "./util/read-numeric-lines.js";

const solve = async function () {
    const lines = await readNumericLines('data/day-01-01.txt');
    let maxElf = 0;
    let currentElf = 0
    for (const number of lines) {

        if(number) {
            currentElf = currentElf + number;
        } else {
            if (currentElf > maxElf) {
                maxElf = currentElf;
            }
            currentElf = 0;
        }
    }
    console.log(maxElf)
}()
