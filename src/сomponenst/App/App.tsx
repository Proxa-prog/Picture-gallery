import { Provider } from "react-redux";

import { Page } from "../Page";
import { store } from "../../store";

import "../../fonts/style.css";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Page />
      </Provider>
    </div>
  );
}

export default App;
