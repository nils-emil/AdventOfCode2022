import {readLines} from "./util/read-lines.js";

const solve = async function () {
    const lines = await readLines('data/day-03-02.txt');
    let sum = 0;
    for (const line of lines) {
        var middle = Math.floor(line.length / 2);
        var s1 = line.substr(0, middle);
        var s2 = line.substr(middle);
        const l1 = s1.split("")
        const l2 = s2.split("")
        const filteredArray = l1.filter(value => l2.includes(value));
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
            sum += sumToAdd;
        }
    }
    console.log(sum)

}()
