import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Page } from "../Page";
import { store } from "../../store";

import "../../fonts/style.css";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Page />
        {/* <BrowserRouter>
          <Routes>
            <Route path="\" element={<Page />} />
          </Routes>
        </BrowserRouter> */}
      </Provider>
    </div>
  );
}

export default App;
