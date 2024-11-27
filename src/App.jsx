import FromComponent from "./components/Form";
import './App.css'
import { store } from "./store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <div className="root">
        <FromComponent />
      </div>
    </Provider>
  );
}

export default App;
