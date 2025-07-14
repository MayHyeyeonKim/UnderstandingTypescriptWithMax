// 89. Intersection Types

type FileDataT = {
    path: string;
    content: string;
};

type DBDataT = {
    connectionUrl: string;
    credentials: string;
}

type StatusT = {
    isOpen: boolean;
    errorMessage?: string;
}

type AccessedFileDataT = FileDataT & StatusT;
type AccessedDBDataT = DBDataT & StatusT;

interface FileDataI {
    path: string;
    content: string;
};

interface DBDataI {
    connectionUrl: string;
    credentials: string;
}

interface StatusI {
    isOpen: boolean;
    errorMessage?: string;
}

interface AccessedFileDataI extends FileDataI, StatusI { }
interface AccessedDBDataI extends DBDataI, StatusI { }
