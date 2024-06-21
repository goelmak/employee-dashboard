import React, { useReducer } from "react";
import { useSetRecoilState } from "recoil";
import { list } from "../assets/list";
import open from "../assets/open";

type State = {
  name?: string;
  email?: string;
  imgUrl?: string;
};
type Action =
  | { type: "name"; value: string }
  | { type: "email"; value: string }
  | { type: "imgUrl"; value: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "imgUrl":
      return { ...state, imgUrl: action.value };
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(reducer, {}); // Initialize with an empty object
  const setList = useSetRecoilState(list);
  const setIsOpen = useSetRecoilState(open);

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (state.email && state.name && state.imgUrl) {
      // Check only required fields
      const newItem = {
        id: Math.floor(Math.random() * (100000 - 1) + 1),
        name: state.name,
        Email: state.email,
        img: state.imgUrl,
      };
      setList((items) => [...items, newItem]);
      setIsOpen(false);
    }
  }

  return (
    <div className="flex flex-col w-1/4 border rounded gap-6 bg-white p-4">
      <input
        type="text"
        placeholder="Name"
        className="focus:outline-none"
        value={state.name || ""}
        onChange={(e) => dispatch({ type: "name", value: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        className="focus:outline-none"
        value={state.email || ""}
        onChange={(e) => dispatch({ type: "email", value: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="focus:outline-none"
        value={state.imgUrl || ""}
        onChange={(e) => dispatch({ type: "imgUrl", value: e.target.value })}
      />
      <button
        type="submit"
        className="rounded bg-blue-400 hover:bg-blue-700 focus:outline-none text-white py-2 px-4"
        onClick={(e) => handleOnClick(e)}
      >
        Add
      </button>
    </div>
  );
};

export default Form;
