import { fetchUsers } from "./api";

interface Persona {
  name: string;
}
interface Admin extends Persona {
  code: number;
}

const welcomeUser = (user: string, userType: userType) => {
  console.log("User", { user, userType });
};

const a = welcomeUser("dev", "admin");

const parseUser = (user: string) => user.toUpperCase();

const parsedUser = parseUser("pepito");

const jefe: Admin = {
  code: 1,
  name: "gpa",
};

const showUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
  users.forEach((user) => {
    console.log(user);
  });
};

showUsers();

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

interface Animal {
  name: string;
  microchip: string;
  age: number;
}
interface Dog extends Animal {
  breed: string;
}

enum ContractStatus {
  Permanent, // 0
  Temporary, // 1
  Contractual, // 2
  Apprenticeship, // 3
}

let something: unknown;
something = 4;
something = true;
something = "hola";

something
  .toUpperCase()(something as string)
  .toUpperCase();

let anything: any;
anything = 4;
anything = true;
anything = "hola";
anything.toUpperCase();
