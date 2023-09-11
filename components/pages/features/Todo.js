import React from "react";
import AddTodo from "@/components/elements/todo/AddTodo";
import TodoList from "@/components/elements/todo/TodoList";
import DeleteTodo from "@/components/elements/todo/DeleteTodo";
import EditTodo from "@/components/elements/todo/EditTodo";
import axios from "axios";

async function getData() {
  const res = await axios.get(
    "https://64e6fcd8b0fd9648b78f2390.mockapi.io/todo",
    {
      cache: "no-store",
    }
  );
  return res.data;
}

export default async function Todo() {
  const todos = await getData();

  return (
    <>
      <div className="w-full h-screen bg-my-bg-light text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark font-open pb-10 ">
        <div className="flex flex-col items-center justify-center w-full  gap-4 pt-28">
          <h1 className="mb-8 text-4xl font-semibold text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark">
            Todo App
          </h1>
          <div className="w-1/2 justify-end phone:w-full">
            <AddTodo />
          </div>
          <TodoList>
            {todos.length > 0 ? (
              todos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.isDone ? "Done" : "Not Done"}</td>
                    <td>
                      <div className="flex flex-row gap-x-2">
                        <EditTodo {...todo} />
                        <DeleteTodo {...todo} />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Tidak Ada data</td>
              </tr>
            )}
          </TodoList>
        </div>
      </div>
    </>
  );
}
