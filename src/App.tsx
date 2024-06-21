import { RecoilRoot } from "recoil";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

const App = () => {
  return (
    <>
      <RecoilRoot>
        <Modal></Modal>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
      </RecoilRoot>
    </>
  );
};
export default App;
