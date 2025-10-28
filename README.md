# Build Your Own Tip Calculator (Console-Based, TypeScript)

If you want to create a console tip calculator like this from scratch, follow these steps.

### Create Repository on github

### Install TypeScript compiler globally

`npm install -g typescript`

### Clone into VS Code

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

> If you start the code again and you forgot to start the compiler again (`tsc -w`), remember to compile again before you think your code has a bug.

When using `tsc -w`, TypeScript automatically recompiles on file changes.
If you don’t have it running, you must manually recompile each time you edit your code.
