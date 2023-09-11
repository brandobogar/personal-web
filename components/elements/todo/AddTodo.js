"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

export default function AddTodo() {
  const [todo, setTodo] = React.useState("");
  const [isDone, setIsDone] = React.useState(false);
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
      await axios.post(
        "https://64e6fcd8b0fd9648b78f2390.mockapi.io/todo",
        {
          title: todo,
          isDone: isDone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTodo("");
      setLoading(false);
      setModal(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button
        className="btn btn-ghost btn-md dark:btn dark:btn-sm"
        onClick={handleModal}
      >
        <i className="ri-file-add-line text-2xl normal-case font-normal"></i>
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={modal}
        onChange={handleModal}
      />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-xl text-my-text-light ">Add Todo</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col h-full w-full form-control phone:flex-col tablet:flex-col "
          >
            <div className="w-full form-control h-fit flex">
              <label className="label text-my-text-light ">Todo</label>
              <input
                type="text"
                placeholder="Enter a new todo"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
                value={todo}
                className="w-full input input-bordered dark:text-my-text-light phone:w-full tablet:w-1/2"
                required
              />
            </div>
            <div className="w-full form-control flex justify-start items-start">
              <label className="label text-my-text-light ">Status</label>
              <div className="flex flex-row gap-x-4">
                <input
                  type="checkbox"
                  onChange={() => {
                    setIsDone(!isDone);
                  }}
                  checked={isDone}
                  className="toggle"
                />
                <p className="text-my-text-light ">
                  {isDone ? "Done" : "Not Done"}
                </p>
              </div>
            </div>
            <div className="modal-action flex w-full justify-end">
              <button type="submit" className="btn btn-accent dark:btn-accent">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "SUBMIT"
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
