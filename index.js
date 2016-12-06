"use strict";
/**
 * Created by allen on 2016/11/25.
 */
const Package_1 = require('./libs/models/Package');
const program = require('commander');
const gulpExec_1 = require('./libs/gulpExec');
const CliParams_1 = require('./libs/models/CliParams');
const packageContent = Package_1.default.getInstance();
function configureCommander() {
    program
        .version(packageContent.version)
        .option('-s, --source <value>', 'source of images required to process')
        .option('-d, --dest <value>', 'destination of image output')
        .option('-c, --concurrency [value]', 'destination of image output')
        .parse(process.argv);
}
function getCliParams() {
    const source = program.source;
    const dest = program.dest;
    const concurrency = program.concurrency;
    return new CliParams_1.default({ source, dest, concurrency });
}
function exec(source, dest, concurrency) {
    configureCommander();
    const cliParams = getCliParams();
    gulpExec_1.default(cliParams);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exec;
//# sourceMappingURL=index.js.map