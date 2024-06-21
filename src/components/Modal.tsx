import { useRecoilState } from "recoil";
import Form from "./Form";
import open from "../assets/open";

const Modal = () => {
  const [isOpen, setIsOpen] = useRecoilState(open);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackgroundClick}
    >
      <Form></Form>
    </div>
  );
};
export default Modal;
