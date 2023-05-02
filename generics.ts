/**
 * Let's create a method that returns some object property value
 */
type Obj = {
  id: number;
  [index: string]: any;
};
const pepita: Obj = {
  id: 4,
  asdasd: 5,
  sdkjhadjkasd: 4,
};
const getProperty = () => {};

/**
 * let's apply Ts on this parser function
 */
const parseFunc = (structure) => {
  const { params = {}, query = {} } = structure;
  const url = "https://example.com/:id/:name";
  let finalUrl = Object.keys(params).reduce((result, currentKey) => {
    const currentParam = `${params?.[currentKey] || ""}`;
    return result.replace(
      `:${currentKey}`,
      encodeURIComponent(currentParam.toLowerCase())
    );
  }, url);

  finalUrl = Object.keys(query).length
    ? `${finalUrl}?${new URLSearchParams(query).toString()}`
    : finalUrl;

  return finalUrl;
};

function buildLabelFunc(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

console.log(buildLabelFunc("Sam Smith"));

// Generics

function foo<T>(x: T): T {
  return x;
}

const fooArrow = <T>(x: T) => x;

fooArrow(2); // 2
fooArrow("hola"); // 'hola'

function getPropertyAux<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3, d: 4 };

getPropertyAux(x, "a"); // 1
