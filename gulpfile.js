const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require ('gulp-uglify');

function scripts() {
    return gulp.src('./scripts/*js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
} 

function styles ( ) {
    return gulp.src('./src/styles/*.scss') //define o local dos arquivos
    .pipe(sass({outputStyle: 'compressed'}) // Compila o SCSS para CSS e o comprime.
    .on('error', sass.logError)) // exibe erro de compilação
    .pipe(gulp.dest('./dist/css')) //define o destino do css compilado
}



function watch () {
    gulp.watch('./src/styles/*.scss', styles);
}

exports.styles = styles;
exports.watch = watch;

exports.default = gulp.parallel(styles, watch, scripts);