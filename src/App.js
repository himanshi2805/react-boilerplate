import React from "react";
import "./App.css";
import './AppInterceptor';
import { Provider } from "react-redux";
import configureAppStore from "./store/AppStore";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRoutes from "./routes/AuthRoutes";

const App = () => {
  return (
    <Provider store={configureAppStore()}>
      <AuthProvider>
        <BrowserRouter>
          <AuthRoutes />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  )
};

export default App;
