/**
 * Example to know when exactly is a decorator being run
 */
const decoratorA = (someBooleanFlag: boolean) => {
  return (target: Function) => {
    console.log("target ", target);

    console.log("boolean ", someBooleanFlag);
  };
};

@decoratorA(true)
class Person {
  _age: number = 0;
  get age() {
    return this._age;
  }
}

console.log("gona create Person instance");
const persona = new Person();
console.log("persona.age;", persona.age);

/**
 * Example with method decorator and decorator factories
 */

function memoize(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // a reference to our original method
  const originalMethod = descriptor.value;

  // hash map to cache function call results
  let cache = new Map();

  descriptor.value = function (...args: any[]) {
    // create a string key for the map by joining all args with ','
    const argsKey = args.join(",");
    // if key found return from cache
    if (cache.has(argsKey)) {
      return cache.get(argsKey);
    }

    // calculate result from original method
    const result = originalMethod.apply(this, args);

    // add new value to cache
    cache.set(argsKey, result);
    return result;
  };

  return descriptor;
}

function forceMock(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function (...args: any[]) {
    return 20;
  };
}

function forceMockWithParams(defaultValue: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.value = function (...args: any[]) {
      return defaultValue;
    };
  };
}

class MyClass {
  @memoize

  // recursive implementation of the fibonacci algorithm
  public fibonacci(num: number): number {
    console.log("I am running fibonacci original");
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }
  private something: number = 2;

  @forceMock
  public getSomething() {
    return this.something;
  }
  @forceMockWithParams(30)
  public getOther() {
    return this.something;
  }
}

const myInstance = new MyClass();

// print the first 12 fibonnaci numbers
for (let i = 0; i < 12; i++) {
  console.log(myInstance.fibonacci(i));
}
console.log("second time");

for (let i = 0; i < 12; i++) {
  console.log(myInstance.fibonacci(i));
}

console.log("getSomething ", myInstance.getSomething());
console.log("getOther ", myInstance.getOther());

/**
 * Advanced example of decorator Factory of a method
 */
const deprecated = (deprecationReason: string) => {
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${propertyKey} is deprecated with reason: ${deprecationReason}`
          );
          propertyDescriptor.value.apply(this, args);
        };

        Object.defineProperty(this, propertyKey, {
          value: wrapperFn,
          configurable: true,
          writable: true,
        });
        return wrapperFn;
      },
    };
  };
};
