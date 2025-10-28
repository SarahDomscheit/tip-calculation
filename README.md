# Build Your Own Tip Calculator (Console-Based, TypeScript)

If you want to create a console tip calculator like this from scratch, follow these steps.

### Create Repository on github

### Install TypeScript compiler globally

`npm install -g typescript`

### Clone into Visual Studio Code

`git clone myrepo`

### Create a tsconfig.json file

`tsc --init`

### Create a tsconfig.json file

```
{
  "compilerOptions": {
    "target": "ES2020", // ➡️ Which JS version to compile to
    "module": "CommonJS", // ➡️ How to handle module imports/exports
    "outDir": "./dist", // ➡️ Where to put the generated .js files
    "rootDir": "./src", // ➡️ Where your original .ts files are
    "strict": true, // ➡️ Enables all strict type-checking options (RECOMMENDED!)
    "esModuleInterop": true, // ➡️ Helps with importing modules
    "skipLibCheck": true, // ➡️ Skips type-checking declaration files
    "forceConsistentCasingInFileNames": true // ➡️ Enforce case-sensitive file names
  }
}
```

### Watch mode to automatically compile

`tsc --watch`

### Install TypeScript type definitions for Node.js

`npm install --save-dev @types/node`

### Run JavaScript file

`node dist/tipCalculator.js`

### Configure .gitignore

```
// .gitignore
node_modules/
dist/
```

### Use readline to interact with the console

`import * as readline from "readline";
`

And then build your tip calculator

## Compile TypeScript

`tsc tipCalculator.ts`

## Run the compiled Javascript

`node tipCalculator.js`

## Important Note

> If you you're using an IDE like Visual Studio Code and you restart the terminal or close your Typescript compiler (`tsc -w`), remember to compile your code again before assuming there's a bug.

When using `tsc -w`, TypeScript automatically recompiles on file changes.
Restarting or reopening your project in the IDE doesn’t automatically recompile your TypeScript files. You need to run `tsc` or `tsc -w` again.
