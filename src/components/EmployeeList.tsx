import { list } from "../assets/list";
import deleteIcon from "../assets/deleteIcon.svg";
import { useRecoilState } from "recoil";
import React from "react";

type MyComponentProps = {
  onShow: (id: number) => void;
};

const EmployeeList: React.FC<MyComponentProps> = ({ onShow }) => {
  const [myList, setList] = useRecoilState(list);

  const handleOnDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ): void => {
    e.stopPropagation();
    setList((list) => {
      return list.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      {myList.map((item, id) => (
        <button
          key={id}
          className="rounded-full bg-blue-100 hover:bg-blue-300 w-full my-1 flex justify-between px-8 items-center"
          onClick={() => {
            console.log(id);
            onShow(item.id);
          }}
        >
          {item.name}
          <button onClick={(e) => handleOnDelete(e, item.id)}>
            <img src={deleteIcon} className="h-5"></img>
          </button>
        </button>
      ))}
    </>
  );
};
export default EmployeeList;
