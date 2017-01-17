"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const glob = require('glob');
const fs = require('fs');
const path = require('path');
const q_1 = require('./models/q');
const index_1 = require('tinypng-loader/libs/index');
function execTinyPng({ source, dest, concurrency }) {
    q_1.default.concurrency = concurrency;
    glob(source, (err, filePaths) => {
        filePaths.forEach((filePath) => {
            q_1.default.push(function (cb) {
                return __awaiter(this, void 0, void 0, function* () {
                    const fileName = path.basename(filePath);
                    const contents = fs.readFileSync(filePath);
                    const compressContent = yield index_1.default(contents, fileName);
                    const distFilePath = path.resolve(dest, fileName);
                    fs.writeFileSync(distFilePath, compressContent);
                    cb();
                });
            });
        });
        q_1.default.start();
        q_1.default.on('success', (result, job) => {
            console.log(q_1.default.length);
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = execTinyPng;
//# sourceMappingURL=gulpExec.js.map