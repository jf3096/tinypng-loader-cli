"use strict";
/**
 * Created by allen on 2016/11/25.
 */
const fs = require('fs');
const cwd = require('cwd');
class Package {
    static getPath() {
        return cwd('package.json');
    }
    static getFileContents() {
        const path = Package.getPath();
        return fs.readFileSync(path).toString();
    }
    static getInstance() {
        if (!Package.instance) {
            Package.instance = JSON.parse(Package.getFileContents());
        }
        return Package.instance;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Package;
//# sourceMappingURL=Package.js.map