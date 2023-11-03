import SideNav from "./components/SideNav";
import Modal from "./components/Modal";
import { ModalProvider } from "./contexts/ModalContext";
import { ConfigProvider } from "./contexts/ConfigContext";
import RouterComponent from "./components/RouterComponent";
function App() {
  
  return (
    <ModalProvider>
    <ConfigProvider>
    <div>
      <Modal /> 
      <div className="flex">
        <div className="w-1/5 z-10">
          <SideNav />
        </div>
        <RouterComponent />
      </div>
    </div>
    </ConfigProvider>
    </ModalProvider>
  );
}

export default App;
