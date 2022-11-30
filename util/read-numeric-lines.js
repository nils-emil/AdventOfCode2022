import readline from 'readline';
import fs from 'fs';

export const readNumericLines = async path => {
    const fileStream = fs.createReadStream(path);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const lines = [];
    for await (const line of rl) {
        lines.push(Number(line))
    }
    return lines;
};
