type User = {
  id: number;
  email: string;
  username: string;
  todos: Todo[];
};
type Todo = {
  id: number;
  description: string;
  done: boolean;
  userId: number;
};
