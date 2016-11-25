/**
 * Created by allen on 2016/11/25.
 */
import * as fs from 'fs';
const cwd = require('cwd');

interface IPackageContent {
    name: string;
    version: string;
}

export default class Package {
    private static instance;

    private static getPath(): string {
        return cwd('package.json');
    }

    private static getFileContents(): string {
        const path = Package.getPath();
        return fs.readFileSync(path).toString();
    }

    public static getInstance(): IPackageContent {
        if (!Package.instance) {
            Package.instance = JSON.parse(Package.getFileContents());
        }
        return Package.instance;
    }
}