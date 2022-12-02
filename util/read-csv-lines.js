import readline from 'readline';
import fs from 'fs';

export const readCsvLines = async path => {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const lines = [];
    for await (const line of rl) {
        if (line === null || line === undefined || line === "") {
            lines.push([])
        } else {
            lines.push(line.split(" ").map(e => e))
        }
    }
    return lines;
};
