// 90. More on Type Guards

// type FileSourceT = { path: string };
// const fileSource: FileSourceT = {
//     path: "some/file/path.txt"
// };

// type DBSourceT = { connectionUrl: string };
// const dbSource: DBSourceT = {
//     connectionUrl: "https://example.com/db"
// };

// type Source = FileSourceT | DBSourceT;

// function loadData(source: Source) {
//     if ('path' in source) {
//         return
//     }
// }