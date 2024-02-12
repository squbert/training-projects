import webpack from "webpack-stream";
import map from 'gulp-sourcemaps'; // для того, чтобы в DevTools было понятно, из какого файла взялись стили

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "JS",
        message: "Error: <%= error.message %"
      })))
      .pipe(map.init())
      .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development',
        output: {
          filename: 'app.min.js',
        }
      }))
      .pipe(map.init())
      .pipe(map.write('../sourcemaps'))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
    }