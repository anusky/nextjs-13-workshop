/**
 * Let's create a method that returns some object property value - Generics Example
 * data const x = { a: 1, b: 2, c: 3, d: 4 };
 * getProperty(x, "a"); // 1
 */
const getProperty = () => {};

/**
 * let's apply Ts on this parser function
 */
type ParamStructure = {
  params?: {
    [key: string]: string | number; // 1 way to setup an object where we know the attribute types
  };
  query?: Record<string, string>; // 2 way to setup an object where we know the attribute types
};

export const parseFunc = (param: ParamStructure) => {
  const { params = {}, query = {} } = param;
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
