// npm init -y is used to create a package.json file in the current directory.

// 📦 node_modules 설명
// The "node_modules" folder contains all the locally installed dependencies
// for a Node.js project. It is automatically generated when you run
// `npm install`, based on the packages listed in package.json.
//
// This folder is usually very large and should NOT be committed to version control.
// Only "package.json" and "package-lock.json" should be tracked in Git.
//
// To delete the folder (cleanup):
//   macOS/Linux:   rm -rf node_modules
//   Windows (PowerShell):   Remove-Item -Recurse -Force node_modules
//
// You can always restore it by running:
//   npm install

// 🏷️ Why do some packages start with '@'?
// The "@" symbol indicates a scoped package (e.g., @types/node).
// Scoped packages belong to a specific organization or namespace on npm.

// 🤔 What is "undici-types"?
// You didn't install this manually — it's a transitive dependency.
// It was automatically installed because @types/node internally depends on it.

// 📌 What is "package-lock.json"?
// This file is automatically created by npm to lock the exact versions
// of every installed package and its dependencies.
// It ensures consistent installs across all environments (reproducibility).
