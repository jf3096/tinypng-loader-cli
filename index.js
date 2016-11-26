"use strict";
/**
 * Created by allen on 2016/11/25.
 */
const Package_1 = require('./libs/models/Package');
const program = require('commander');
const gulpExec_1 = require('./libs/gulpExec');
const path = require('path');
const cliPath = process.cwd();
const packageContent = Package_1.default.getInstance();
function configureCommander() {
    program
        .version(packageContent.version)
        .option('-s, --source <value>', 'source of images required to process')
        .option('-d, --dest <value>', 'destination of image output')
        .parse(process.argv);
}
function convertPath2Absolute(rawPath) {
    if (path.isAbsolute(rawPath)) {
        return rawPath;
    }
    return path.resolve(cliPath, rawPath);
}
function getCliParams() {
    const source = program.source;
    const dest = program.dest;
    if (!source || !dest) {
        throw `please provide source and destination path`;
    }
    return {
        source: convertPath2Absolute(source),
        dest: convertPath2Absolute(dest)
    };
}
function exec(cliParams) {
    configureCommander();
    if (arguments.length === 0) {
        cliParams = cliParams || getCliParams();
    }
    if (!cliParams.source) {
        throw `please provide source path`;
    }
    if (!cliParams.dest) {
        throw `please provide destination path`;
    }
    gulpExec_1.default(cliParams.source, cliParams.dest);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exec;
//# sourceMappingURL=index.js.map