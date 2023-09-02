"use client";

import React, { useState, useEffect } from "react";

export const Result = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setShow(true);
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/classification");
      if (res.ok) {
        const result = await res.json();
        console.log(typeof result);
        setData(result);
        console.log({ data });
      } else {
        console.error("error fetching data");
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-x-4">
        <button className="btn btn-success" onClick={fetchData}>
          Classificate
        </button>
        {show ? (
          loading ? (
            <span className="loading loading-spinner text-warning"></span>
          ) : (
            <ul>
              <li>Total pala: {data.total_pala}</li>
              <li>Pala A: {data.pala_a}</li>
              <li>Pala B: {data.pala_b}</li>
              <li>Pala C: {data.pala_c}</li>
              <li>Result: {data.result}</li>
            </ul>
          )
        ) : null}
      </div>
    </>
  );
};
