import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import EApp from "./EApp";
import NApp from "./NApp";
import Home from "./Home";
import Layout from "./Layout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import "./index.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home  />} />
          <Route path="news" element={<App heading="News" tag="1" />} />
          <Route path="event" element={<EApp heading="Event" tag="2" />} />
          <Route path="notice" element={<NApp heading="Notice" tag="3" />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </Provider>,
  document.getElementById("root")
);
