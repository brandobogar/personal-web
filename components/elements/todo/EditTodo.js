"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function EditTodo(todo) {
  const [updatedTodo, setUpdatedTodo] = React.useState(todo.title);
  const [isDone, setIsDone] = React.useState(todo.isDone);
  const [modal, setModal] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();
  const handleModal = () => {
    setModal(!modal);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `https://64e6fcd8b0fd9648b78f2390.mockapi.io/todo/${todo.id}`,
        {
          title: updatedTodo,
          isDone: isDone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUpdatedTodo("");
      setLoading(false);
      setModal(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  // async function handleFormSubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   await fetch(
  //     `https://64e6fcd8b0fd9648b78f2390.mockapi.io/todo/${Number(todo.id)}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         title: updatedTodo,
  //         isDone: isDone,
  //       }),
  //     }
  //   );
  //   setUpdatedTodo("");
  //   setLoading(false);
  //   setModal(false);
  //   router.refresh();
  // }

  return (
    <div>
      <button className="btn btn-accent btn-sm " onClick={handleModal}>
        <i className="ri-edit-line text-xl  normal-case font-normal"></i>
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={modal}
        onChange={handleModal}
      />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-xl text-my-text-light ">Edit Todo</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col h-full w-full form-control phone:flex-col tablet:flex-col "
          >
            <div className="w-full form-control h-fit flex">
              <label className="label text-my-text-light text-lg">Todo</label>
              <input
                type="text"
                placeholder="Enter a new todo"
                onChange={(e) => {
                  setUpdatedTodo(e.target.value);
                }}
                value={updatedTodo}
                className="w-full input input-bordered dark:text-my-text-light phone:w-full tablet:w-1/2"
              />
            </div>
            <div className="w-full form-control flex justify-start items-start">
              <label className="label text-my-text-light text-lg">Status</label>
              <div className="flex flex-row gap-x-4 items-center ">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsDone(!isDone);
                  }}
                  checked={isDone}
                  className="toggle"
                />
                <p className="text-lg text-my-text-light">
                  {isDone ? "Done" : "Not Done"}
                </p>
              </div>
            </div>
            <div className="modal-action flex w-full justify-end">
              <button type="submit" className="btn btn-accent dark:btn-accent">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "UPDATE"
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setModal(false);
                }}
                className="btn btn-error "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
