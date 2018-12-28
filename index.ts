/**
 * Created by allen on 2016/11/25.
 */
import * as program from 'commander';
import execTinyPng from './libs/gulpExec';
import * as path from 'path';
import IExportedCommand = commander.IExportedCommand;

const cliPath = process.cwd();
const packageContent = require('./package.json');

interface ICliParams {
    source: string;
    dest: string;
}

function configureCommander(): void {
    program
        .version(packageContent.version)
        .option('-s, --source <value>', 'source of images required to process')
        .option('-d, --dest <value>', 'destination of image output')
        .parse(process.argv);
}

function convertPath2Absolute(rawPath: string): string {
    if (path.isAbsolute(rawPath)) {
        return rawPath;
    }
    return path.resolve(cliPath, rawPath);
}

function getCliParams(): ICliParams {
    const source = (program as ICliParams & IExportedCommand).source;
    const dest = (program as ICliParams & IExportedCommand).dest;
    if (!source || !dest) {
        program.outputHelp();
        throw `please provide source and destination path`;
    }
    return {
        source: convertPath2Absolute(source),
        dest: convertPath2Absolute(dest)
    }
}

export default function exec(cliParams?: ICliParams) {
    configureCommander();
    if (arguments.length === 0) {
        cliParams = cliParams || getCliParams();
    }
    if (!cliParams.source) {
        program.outputHelp();
        throw `please provide source path`;
    }
    if (!cliParams.dest) {
        program.outputHelp();
        throw `please provide destination path`;
    }
    execTinyPng(cliParams.source, cliParams.dest);
}
