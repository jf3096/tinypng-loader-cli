/**
 * Created by allen on 2016/12/6.
 */
import * as path from 'path';
const cliPath = process.cwd();

export interface ICliParams {
    source: string;
    dest: string;
    concurrency: number;
}

export default class CliParams implements ICliParams {
    public static DEFAULT_CONCURRENCY = 100;

    public source: string;
    public dest: string;
    public concurrency: number;

    public constructor(rawCliParams: ICliParams) {
        const {source, dest, concurrency} = CliParams.validate(rawCliParams);
        this.source = CliParams.convertPath2Absolute(source);
        this.dest = CliParams.convertPath2Absolute(dest);
        this.concurrency = concurrency || CliParams.DEFAULT_CONCURRENCY;
    }

    private static convertPath2Absolute(rawPath: string): string {
        if (path.isAbsolute(rawPath)) {
            return rawPath;
        }
        return path.resolve(cliPath, rawPath);
    }

    private static validate(cliParams: ICliParams) {
        let {source, dest, concurrency} = cliParams;
        if (!source || !dest) {
            throw `please provide source and destination path`;
        }
        if (typeof concurrency === 'undefined') {
            return {source, dest, concurrency};
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
        return {source, dest, concurrency};
    }
}