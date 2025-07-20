// 128. Exploring Template Literal Types

type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`; // type FilePermissions = "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};
