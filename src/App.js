import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import AppRoutes from "routes/AppRoutes";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";

import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Layout>
            <AppRoutes/>
          </Layout>
        </BrowserRouter>
        <ToastContainer 
          position = "top-right"
          className = "app-toast"
        />
      </div>
    );
  }
}

export default App;