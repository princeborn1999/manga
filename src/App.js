import SideNav from "./components/SideNav";
import Modal from "./components/Modal";
import { ModalProvider } from "./contexts/ModalContext";
import { ConfigProvider } from "./contexts/ConfigContext";
import RouterComponent from "./components/RouterComponent";
export const provider = (provider, props = {}) => [provider, props];

export const ProviderComposer = ({providers, children}) => {
    for (let i = providers.length - 1; i >= 0; --i) {
        const [Provider, props] = providers[i];
        children = <Provider {...props}>{children}</Provider>
    }
    return children;
}
function App() {
  
  return (
    <ProviderComposer
      providers={[
        provider(ModalProvider),
        provider(ConfigProvider),
    ]}
    >
    <div>
      <Modal /> 
      <div className="flex">
        <div className="w-1/5 z-10">
          <SideNav />
        </div>
        <RouterComponent />
      </div>
    </div>
    </ProviderComposer>
  );
}

export default App;
