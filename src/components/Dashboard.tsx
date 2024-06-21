import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeList from "./EmployeeList";

const Dashboard = () => {
  const [id, setId] = useState(0);

  const handleOnClick = (id: number) => {
    setId(id);
  };

  return (
    <div className="grid grid-rows-5 grid-cols-5 max-h-80 border">
      <div className="flex flex-col col-span-1 row-span-5">
        <div className="text-center">Employee List</div>
        <hr className=" mt-2 mx-6"></hr>
        <div className="flex flex-col w-full justify-content items-center overflow-auto mt-2">
          <EmployeeList onShow={handleOnClick} />
        </div>
      </div>
      <div className="flex flex-col col-span-4 row-span-5 items-center">
        <div>Employee details</div>
        <hr className="w-full mt-2"></hr>
        <div className="flex flex-col items-center my-auto">
          <EmployeeDetails id={id}></EmployeeDetails>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
