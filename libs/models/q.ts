/**
 * Created by allen on 2016/12/5.
 */

interface IQueue {
    push: (cb?)=>void
    timeout: number;
    concurrency: number;
    start: (onCompleteOrErr?)=>void;
}

const queue = require('queue');
const q: IQueue = queue();
export default q;