/**
 * Created by allen on 2016/11/25.
 */

interface IPackageContent {
    name: string;
    version: string;
}

const packageContent: IPackageContent = require('../../package.json');
export default packageContent;