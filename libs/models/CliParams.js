"use strict";
/**
 * Created by allen on 2016/12/6.
 */
const path = require('path');
const cliPath = process.cwd();
class CliParams {
    constructor(rawCliParams) {
        const { source, dest, concurrency } = CliParams.validate(rawCliParams);
        this.source = CliParams.convertPath2Absolute(source);
        this.dest = CliParams.convertPath2Absolute(dest);
        this.concurrency = concurrency || CliParams.DEFAULT_CONCURRENCY;
    }
    static convertPath2Absolute(rawPath) {
        if (path.isAbsolute(rawPath)) {
            return rawPath;
        }
        return path.resolve(cliPath, rawPath);
    }
    static validate(cliParams) {
        let { source, dest, concurrency } = cliParams;
        if (!source || !dest) {
            throw `please provide source and destination path`;
        }
        if (typeof concurrency === 'undefined') {
            return { source, dest, concurrency };
        }
        if (typeof concurrency != 'number') {
            concurrency = +concurrency;
        }
        if (!concurrency) {
            throw `concurrency is invalid, concurrency = ${concurrency}. concurrency must be a valid number type between 1-100 (inclusive)`;
        }
        if (concurrency < 1 || concurrency > 100) {
            throw `concurrency is out of range, concurrency = ${concurrency}. concurrency must be a valid number type between 1-100 (inclusive)`;
        }
        return { source, dest, concurrency };
    }
}
CliParams.DEFAULT_CONCURRENCY = 100;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CliParams;
//# sourceMappingURL=CliParams.js.map