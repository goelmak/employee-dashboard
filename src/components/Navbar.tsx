import { useSetRecoilState } from "recoil";
import open from "../assets/open";

const Navbar = () => {
  const setIsOpen = useSetRecoilState(open);
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="text-xl font-semibold pt-1">
          EMPLOYEE DATABASE MANAGEMENT
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full"
          onClick={() => setIsOpen(true)}
        >
          Add Employee
        </button>
      </div>
    </>
  );
};
export default Navbar;
