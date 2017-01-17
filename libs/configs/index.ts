interface IConfig {
    concurrency: number;
    upperLimit: number;
    lowerLimit: number;
}

const configs: IConfig = {
    concurrency: 100,
    upperLimit: 100,
    lowerLimit: 0
};

export default configs;