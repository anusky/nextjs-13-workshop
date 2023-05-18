function paramDecorator(
  target: Object,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Decorating param ${parameterIndex} from ${propertyKey}`);
}

function propertyDecorator(target: Object, propertyKey: string) {
  console.log("target", target);
  console.log("propertyKey", propertyKey);
}

function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    id = self.crypto.randomUUID();
  };
}
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
@classDecorator
export class TestClass {
  static staticMember = true;

  @propertyDecorator
  instanceMember: string = "hello";

  //   @deprecated("Use another static method")
  static deprecatedMethodStatic() {
    console.log(
      "inside deprecated static method - staticMember =",
      this.staticMember
    );
  }

  //   @deprecated("Use another instance method")
  deprecatedMethod() {
    console.log(
      "inside deprecated instance method - instanceMember =",
      this.instanceMember
    );
  }

  someMethod(paramA: any, @paramDecorator paramB: any) {}

  private _x: number = 2;
  private _y: number = 4;

  //   @accessorDecorator(false)
  get whatever() {
    return this._x;
  }
  set whatever(value: number) {
    this._x = value;
  }
  static example: string = "non-instantiable";
}

@classDecorator
class OtherClass {}

@classDecorator
class AndOtherClass {}

const instance = new TestClass();
instance.whatever = 20;
console.log(instance.whatever);

const otherClassInstance = new OtherClass();
const andOtherClassInstance = new AndOtherClass();

// @ts-ignore
console.log("instance id", instance?.id);
// @ts-ignore
console.log("otherClassInstance id", otherClassInstance?.id);
// @ts-ignore
console.log("andOtherClassInstance id", andOtherClassInstance?.id);

// // @ts-ignore
// TestClass.prototype.getHeight = function () {
//   // @ts-ignore

//   return this.height;
// };
