import {readNumericLines} from "./util/read-numeric-lines.js";

const solve = async function () {
    const lines = await readNumericLines('data/day-01-01.txt');
    let maxElves = [0, 0, 0];
    let currentElf = 0
    for (const number of lines) {
        if (number) {
            currentElf = currentElf + number;
        } else {
            maxElves.sort(function(a, b) {
                return a - b;
            });
            for (let i = 0; i < 3; i++) {
                if (maxElves[i] < currentElf) {
                    maxElves[i] = currentElf;
                    break
                }
            }
            currentElf = 0;
        }
    }
    console.log(maxElves)
}()
