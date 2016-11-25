"use strict";
const gulp = require('gulp');
const gulpTinyPng = require('tinypng-loader/gulp/index');
function execTinyPng(src, dest) {
    gulp.task('tinypng', (cb) => {
        gulp.src(src)
            .pipe(gulpTinyPng())
            .pipe(gulp.dest(dest))
            .on('end', cb);
    });
    gulp[`start`]('tinypng');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = execTinyPng;
//# sourceMappingURL=gulpExec.js.map