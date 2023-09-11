"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

export default function DeleteTodo(todo) {
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleModal = () => {
    setModal(!modal);
  };

  async function handleDelete(todoId) {
    setIsLoading(true);
    await axios.delete(
      `https://64e6fcd8b0fd9648b78f2390.mockapi.io/todo/${todoId}`
    );
    setIsLoading(false);
    handleModal();
    router.refresh();
  }

  return (
    <div>
      <button className="btn btn-error btn-sm " onClick={handleModal}>
        <i className="ri-delete-bin-line text-xl  normal-case font-normal"></i>
      </button>
      <input
        type="checkbox"
        className="modal-toggle"
        checked={modal}
        onChange={handleModal}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold text-my-text-light ">
            Are you sure to delete {todo.title}?
          </h3>
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-error"
              onClick={() => {
                handleDelete(Number(todo.id));
              }}
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Delete"
              )}
            </button>
            <button type="button" className="btn" onClick={handleModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
