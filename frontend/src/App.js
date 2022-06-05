import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.js'
import { Modal } from "bootstrap";
import {useGlobalContext} from './contexts/context'
import ModalBox from "./components/ModalBox";

function App() {
  return (
    <>
      <Home/>
      <ModalBox/>
      <Sidebar/>
      
    </>
  );
}

export default App;
