import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename'; // переименовывает файлы (min.css)
import cleanCss from 'gulp-clean-css'; // Сжимает CSS файлы
import webpcss from 'gulp-webpcss'; // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов
import map from 'gulp-sourcemaps'; // для того, чтобы в DevTools было понятно, из какого файла взялись стили

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %"
      })))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(map.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
      {
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      }
    ))
    .pipe(
      autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    // Раскомментировать если нужен не сжатый дубль файла стилей
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe((cleanCss({
      level: 2
    })))
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(map.write('../sourcemaps/'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}