//powerShell
// Get-ChildItem -Recurse -Path .\src -Filter *.js | Remove-Item
//Recursively find and delete all .js files inside the 'src' directory and its subdirectories

// Get-ChildItem         → Lists all files and folders (similar to 'ls' or 'dir')
// -Recurse              → Includes all subfolders
// -Path .\src           → Starts searching inside the 'src' directory
// -Filter *.js          → Filters for files ending in '.js'
// |                     → Pipes (sends) the list of files to the next command
// Remove-Item           → Deletes each .js file found
