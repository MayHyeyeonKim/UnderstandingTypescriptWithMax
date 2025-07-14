// 91. Discriminated Unions

// type FileSourceT = { type: 'file'; path: string };
// const fileSource: FileSourceT = {
//     path: "some/file/path.txt",
//     type: "file"
// };

// type DBSourceT = { type: 'db'; connectionUrl: string };
// const dbSource: DBSourceT = {
//     connectionUrl: "https://example.com/db",
//     type: "db"
// };

// type Source = FileSourceT | DBSourceT;

// function loadData(source: Source) {
//     // if ('path' in source) {
//     if (source.type === 'file') {
//         return
//     }
//     source.connectionUrl; // This is safe because we know it's a DBSourceT
// }