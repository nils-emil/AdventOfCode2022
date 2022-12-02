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

function getWin(enemyChoice) {
    if (enemyChoice === "A") {
        return "Y"
    }
    if (enemyChoice === "B") {
        return "Z"
    }
    if (enemyChoice === "C") {
        return "X"
    }
}

function getDraw(enemyChoice) {
    if (enemyChoice === "A") {
        return "X"
    }
    if (enemyChoice === "B") {
        return "Y"
    }
    if (enemyChoice === "C") {
        return "Z"
    }
}

function getLoss(enemyChoice) {
    if (enemyChoice === "A") {
        return "Z"
    }
    if (enemyChoice === "B") {
        return "X"
    }
    if (enemyChoice === "C") {
        return "Y"
    }
}

function getMyMove(chooser, enemyChoice) {
    if (chooser === "X") {
        return getLoss(enemyChoice)
    } else if (chooser === "Y") {
        return getDraw(enemyChoice)
    } else if (chooser === "Z") {
        return getWin(enemyChoice)
    }
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
        let chooser = keyValue[1];
        let myChoice = getMyMove(chooser, enemyChoice);
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
