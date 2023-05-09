"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const NewUserTodo = ({ callback }: { callback: any }) => {
  const router = useRouter();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleOnAddTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await callback({
      description: formData.get("description"),
      done: formData.get("done") === "true",
    });
    router.refresh();
  };
  return (
    <form onSubmit={handleOnAddTodo}>
      <p>Add new todo:</p>
      <div className="inline-flex gap-x-3">
        <label>
          <input
            type="text"
            name="description"
            placeholder="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>

        <label className="ml-2 text-sm font-medium text-gray-400 dark:text-gray-500 flex items-center">
          Done:
          <input className="border-0" type="checkbox" name="done" />
        </label>
      </div>

      <button>Add new TODO</button>
    </form>
  );
};

export default NewUserTodo;
