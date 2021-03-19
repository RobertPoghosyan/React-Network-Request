import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import {Provider} from 'react-redux';

import AppContextProvider from "context/AppContextProvider";
import AppRoutes from "routes/AppRoutes";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import {store} from "reducers";

import 'react-toastify/dist/ReactToastify.css';





export class App extends Component {
  
  render() {
    return (
      <div>
        <Provider store = {store}>
        <AppContextProvider >
          <BrowserRouter>
            <Header />
            <Layout>
              <AppRoutes/>
            </Layout>
          </BrowserRouter>
        </AppContextProvider>
        </Provider>
        <ToastContainer 
          position = "top-right"
          className = "app-toast"
        />
      </div>
    );
  }
}

export default App;