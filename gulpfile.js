import gulp from "gulp";

import { path } from "./gulp/config/path.js";

global.app = {
    path: path,
    gulp: gulp
}
//импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
//наблюдатель за изменениями файлов
function watcher(){
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
}

const mainTasks = gulp.parallel(copy, html);

//построение сценариев для выполнения задач (Метод serios выполняет задачи последовательно)
const dev = gulp.series(reset, mainTasks, watcher);
//выполнение сценария по умолчанию
gulp.task(`default`, dev);