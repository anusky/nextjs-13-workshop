/**
 * We don't need to setup this type as Prisma Client is setting it up through their models
 */
// type User = {
//   id: number;
//   email: string;
//   username: string;
//   todos: Todo[];
// };
type Todo = {
  id: number;
  description: string;
  done: boolean;
  userId: number;
};
