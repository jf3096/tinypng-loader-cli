/**
 * Created by allen on 2016/11/25.
 */
import Package from './libs/models/Package';
import * as program from 'commander';
import execTinyPng from './libs/gulpExec';
import CliParams, {ICliParams} from './libs/models/CliParams';
import ICommand = commander.ICommand;
import IExportedCommand = commander.IExportedCommand;
const packageContent = Package.getInstance();

function configureCommander(): void {
    program
        .version(packageContent.version)
        .option('-s, --source <value>', 'source of images required to process')
        .option('-d, --dest <value>', 'destination of image output')
        .option('-c, --concurrency [value]', 'destination of image output')
        .parse(process.argv);
}

function getCliParams(): ICliParams {
    const source = (program as ICliParams&IExportedCommand).source;
    const dest = (program as ICliParams&IExportedCommand).dest;
    const concurrency = (program as ICliParams&IExportedCommand).concurrency;
    return new CliParams({source, dest, concurrency});
}

export default function exec(source?: string, dest?: string, concurrency?: number) {
    configureCommander();
    const cliParams = getCliParams();
    execTinyPng(cliParams);
}