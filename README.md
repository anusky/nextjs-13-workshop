# NextJS 13 Workshop


## Introduction to Typescript

### Installation
```bash
npm init

npm i --save-dev ts-node typescript
```

### Add basic script
```bash
# let's create and edit with a simple log our script file
touch examples.ts
echo console.log('hello Typescript!') > examples.ts
```
Add an script on your package.json
```json

// package.json
...,
"scripts": {
    "examples": "ts-node examples.ts"
  },
...
```

### Run the script we created
```bash
npm run examples
```


### Official Typescript courses - FREE
- [Microsoft official course](https://learn.microsoft.com/es-es/training/paths/build-javascript-applications-typescript/)

### Add some VCode extensions if you like 
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Pretty Typescript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)


### Notes

- [Ts Cheatsheets](https://www.typescriptlang.org/cheatsheets)
- 
