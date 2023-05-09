import NewUserTodo from "@/app/components/NewUserTodo";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const fetchUserTodoList = (userId: string) =>
  prisma.todo.findMany({
    where: {
      userId: parseInt(userId),
    },
    include: {
      user: true,
    },
  });

type TodosPageProps = {
  searchParams: {
    user: string;
  };
};
const TodosPage = async ({ searchParams }: TodosPageProps) => {
  const todoList = await fetchUserTodoList(searchParams.user);

  async function addTodo(newTodo: { description: string; done: boolean }) {
    "use server";
    const todo = await prisma.todo.create({
      data: {
        ...newTodo,
        userId: parseInt(searchParams.user),
      },
    });
    console.log("created todo", todo);
  }

  return (
    <section className="grid gap-y-2">
      <h1>TodosPage</h1>
      <div className="grid gap-y-6">
        <NewUserTodo callback={addTodo} />

        <div className=" rounded-md border-2 border-blue-600 p-2">
          <h3>List of Todos</h3>
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                <span>{todo.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TodosPage;
