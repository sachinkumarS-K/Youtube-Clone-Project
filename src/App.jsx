import {  Provider } from "react-redux";
import store from "./redux/store"
import Body from "./components/Body";

function App() {

  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App
