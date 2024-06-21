import { useRecoilValue } from "recoil";
import { list } from "../assets/list";

const EmployeeDetails = ({ id }: { id: number }) => {
  const myList = useRecoilValue(list);
  let item = myList.find((item) => item.id === id);
  if (!item) {
    item = {
      id: 0,
      img: "https://picsum.photos/200",
      name: "Employee Name",
      Email: "Employee Email",
    };
  }

  return (
    <>
      <img
        src={item.img}
        className="h-20 w-20 rounded-full object-cover"
        alt="Item Image"
      />
      <div className="bold">{item.name}</div>
      <div>{item.Email}</div>
    </>
  );
};
export default EmployeeDetails;
