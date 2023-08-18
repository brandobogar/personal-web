"use client";

import { useState } from "react";
import Navbar from "../elements/features/Navbar";

const icon = {
  trash: <i className="ri-delete-bin-line"></i>,
  edit: <i className="ri-pencil-line"></i>,
};

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const handleTodoEdit = (todo) => {
    window.my_modal_1.showModal();
    setEditTodo(todo);
  };
  const handleModalClose = () => {
    // setShowModal(false);
    window.my_modal_1.close();
    setEditTodo("");
    setNewTodo("");
  };

  const handleTodoUpdate = (e) => {
    e.preventDefault();

    const updatedTodos = todos.map((todo) =>
      todo === editTodo ? newTodo : todo
    );
    setTodos(updatedTodos);

    handleModalClose();
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-my-bg-light text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark font-open">
        <div className="flex flex-col items-center justify-start w-full h-full gap-4 pt-28">
          <h3 className="mb-8 text-4xl font-semibold text-my-text-light dark:bg-my-bg-dark dark:text-my-text-dark">
            Todo App
          </h3>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-row items-center justify-center w-full gap-6 form-control phone:flex-col tablet:flex-col "
          >
            <input
              type="text"
              placeholder="Enter a new todo"
              onChange={handleInputChange}
              value={newTodo}
              className="w-1/4 input input-bordered dark:text-my-text-light phone:w-3/4 tablet:w-1/2"
            />
            <button type="submit" className="btn btn-neutral dark:btn-accent">
              SUBMIT
            </button>
          </form>
          <div className="w-1/2 h-max phone:w-full phone:px-4 tablet:w-3/4">
            <ul className="flex flex-col items-center justify-start w-full ">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center justify-around w-full h-14 "
                >
                  <div className="w-3/4 text-lg">{todo}</div>
                  <div className="flex flex-row items-center justify-center w-1/4 gap-5 phone:gap-3 ">
                    <button
                      onClick={() => handleTodoEdit(todo)}
                      className="btn-ghost   text-2xl rounded-md px-1 normal-case font-normal"
                    >
                      {icon.edit}
                    </button>
                    <button
                      onClick={() => handleTodoDelete(todo)}
                      className="btn-ghost rounded-md px-1 text-2xl normal-case font-normal"
                    >
                      {icon.trash}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {showModal ? (
            <dialog id="my_modal_1" className="modal">
              <div className="p-6 modal-box dark:bg-my-bg-dark">
                <div className="w-full h-1/4">
                  <h3 className="text-2xl font-semibold dark:text-my-text-dark">
                    Edit
                  </h3>
                </div>

                <form
                  onSubmit={handleTodoUpdate}
                  className="flex flex-col w-full p-0 pt-4"
                >
                  <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Edit todo"
                    className="w-full input input-bordered input-md dark:text-my-text-light"
                  />
                  <div className="modal-action">
                    <button className="btn btn-md btn-success " type="submit">
                      Update
                    </button>
                    <button
                      className="flex flex-row items-center justify-center p-3 py-0 ml-4 btn btn-md btn-error"
                      onClick={handleModalClose}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                  {/* <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form> */}
                </form>
              </div>
            </dialog>
          ) : null}
        </div>
      </div>
    </>
  );
}
