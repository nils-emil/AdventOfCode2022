import {readCsvLines} from "./util/read-csv-lines.js";

function getDrawWin(enemyChoice, myChoice) {
    if ("A" === enemyChoice && "X" === myChoice) {
        return 3;
    }
    if ("B" === enemyChoice && "Y" === myChoice) {
        return 3;
    }
    if ("C" === enemyChoice && "Z" === myChoice) {
        return 3;
    }
    return 0;
}

function getBonusPointsFromChoice(myChoice) {
    if (myChoice === "X") {
        return 1;
    }
    if (myChoice === "Y") {
        return 2;
    }
    if (myChoice === "Z") {
        return 3;
    }
    return 0;
}

const solve = async function () {
    const csv = await readCsvLines('data/day-02-01.txt');
    let score = 0;
    for (const keyValue of csv) {
        let enemyChoice = keyValue[0];
        let myChoice = keyValue[1];
        let myRockWins = "A" === enemyChoice && "Y" === myChoice;
        let myPaperWins = "C" === enemyChoice && "X" === myChoice;
        let myScissorsWin = "B" === enemyChoice && "Z" === myChoice;
        let iWin = myRockWins || myPaperWins || myScissorsWin
        if (iWin) {
            score += 6;
        } else {
            score += getDrawWin(enemyChoice, myChoice);
        }
        score += getBonusPointsFromChoice(myChoice);
    }
    console.log(score)

}()
