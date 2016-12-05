import * as gulp from 'gulp';
import * as gulpTinyPng from 'tinypng-loader/gulp/index';

export default function execTinyPng(src: string, dest: string): void {
    gulp.task('tinypng', (cb) => {
        gulp.src(src)
            .pipe(gulpTinyPng())
            .pipe(gulp.dest(dest))
            .on('end', cb);
    });
    gulp[`start`]('tinypng');
}