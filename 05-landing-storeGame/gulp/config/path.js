// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist'; // папка с конечными файлами
const srcFolder = './src'; // папка с рабочими файлами

export const path = {
  build: {
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    files: `${buildFolder}/files`,
    fonts: `${buildFolder}/fonts`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/app.js`,
    files: `${srcFolder}/files/**/*.*`,
    svgicon: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,svg,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
