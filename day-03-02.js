import {readLines} from "./util/read-lines.js";

function getSumOnStrings(s1, s2, s3) {
    let sum = 0;
    const l1 = s1.split("")
    const l2 = s2.split("")
    const l3 = s3.split("")
    const filteredArray = l1.filter(value => l2.includes(value) && l3.includes(value));
    let set = new Set(filteredArray);
    const item = [...set.values()][0]
    if (item) {
        let charCode = item.charCodeAt(0)
        let isUpperCase = charCode <= 90 && charCode >= 65;
        let isLowerCase = charCode <= 122 && charCode >= 97;
        let sumToAdd = 0;
        if (isLowerCase) {
            sumToAdd = charCode - 96
        }
        if (isUpperCase) {
            sumToAdd = charCode - 38
        }
        console.log(item + " (" + sumToAdd + ")")
        sum += sumToAdd;
    }
    return sum;
}

const solve = async function () {
    const lines = await readLines('data/day-03-02.txt');
    let sum = 0;
    const groups = [[]];
    for (const line of lines) {
        let length = groups.length - 1;
        if (groups[length].length >= 3) {
            groups.push([])
            length ++;
        }
        groups[length].push(line)

    }
    for (const group of groups) {
        sum += getSumOnStrings(group[0], group[1], group[2]);
    }
    console.log(sum)
}()
