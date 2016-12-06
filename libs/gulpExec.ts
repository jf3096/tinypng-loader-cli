import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';
import q from './models/q';
import processTinyPng from 'tinypng-loader/libs/index';
import CliParams from './models/CliParams';
export default function execTinyPng({source, dest, concurrency}:CliParams): void {
    q.concurrency = concurrency;
    glob(source, (err, filePaths) => {
        filePaths.forEach((filePath) => {
            q.push(async function (cb) {
                const fileName = path.basename(filePath);
                const contents = fs.readFileSync(filePath) as any as string;
                const compressContent = await processTinyPng(contents, fileName);
                const distFilePath = path.resolve(dest, fileName);
                fs.writeFileSync(distFilePath, compressContent);
                cb();
            })
        });
        q.start();
        q.on('success', function (result, job) {
            console.log(q.length);
        });
    });

}

