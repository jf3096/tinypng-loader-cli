interface IConfig {
    concurrency: number;
    upperLimit: number;
    lowerLimit: number;
}

const configs: IConfig = require('../../package.json').configs;

export default configs;