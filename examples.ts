import { fetchUsers } from "./api";

interface Persona {
  name: string;
}
interface Admin extends Persona {
  code: number;
}

type A = {
  id: number;
};
type B = A & {
  name: string;
};

const testA: A = { id: 1 };
const testB: B = { id: 1, name: "pepito  " };

const welcomeUser = (user: string, type: string) => {
  console.log("User", { user, type });
};

const a = welcomeUser("dev", "admin");

const parseUser = (user: string) => user.toUpperCase();

const parsedUser = parseUser("pepito");

const jefe: Admin = {
  code: 1,
  name: "gpa",
};

/**
 * Example with data fetches
 */
const showUsers = async () => {
  const users = await fetchUsers();
  // console.log("users", users);
  users.forEach((user) => {
    console.log(user);
  });
};

showUsers();

/**
 * Basic TS types
 */
type otherType = {
  a: number;
};

type types = {
  a: number;
  b: string;
  c: boolean;
  d: "hola" | "adios";
  e: string[];
  f: {
    a: number;
  };
  g: otherType;
  h: unknown;
  i: any;
  j: void;
  k: null;
};

/**
 * Examples with interfaces
 */

interface Animal {
  name: string;
  microchip: string;
  age: number;
}
interface Dog extends Animal {
  breed: string;
}

/**
 * Examples with enums
 */

enum ContractStatus {
  Permanent, // 0
  Temporary, // 1
  Contractual, // 2
  Apprenticeship, // 3
}
enum NewContractStatus {
  Permanent = 3, // 3
  Temporary, // 4
  Contractual, // 5
  Apprenticeship, // 6
}
const contractStatusTemp = ContractStatus.Temporary; // 1

console.log(contractStatusTemp); // 1
console.log(ContractStatus[contractStatusTemp]); // Temporary

/**
 * Examples with unknown and any
 */
let something: unknown;
something = 4;
something = true;
something = "hola";

// something.toUpperCase();
// (something as string).toUpperCase();

let anything: any;
anything = 4;
anything = true;
anything = "hola";
anything.toUpperCase();
